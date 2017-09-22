from rest_framework import serializers

from .models import Game
from players.views import PlayerViewSet

class GameSerializer(serializers.HyperlinkedModelSerializer):
    in_game = serializers.SerializerMethodField(method_name='is_in_game')
    is_turn = serializers.SerializerMethodField(method_name='is_player_turn')

    class Meta:
        model = Game
        fields = (
            'url',
            'id',
            'created',
            'title',
            'players', 
            'board', 
            'history', 
            'turn', 
            'winner', 
            'done', 
            'full', 
            'started',
            'max_players',
            'order',
            'next_player',
            'connect',
            'owner',
            'in_game',
            'is_turn'
        )

    def is_in_game(self, obj):
        player = self.context['request'].user.player
        return player in obj.players.get_queryset()

    def is_player_turn(self, obj):
        player = self.context['request'].user.player
        return player.pk == obj.next_player.pk
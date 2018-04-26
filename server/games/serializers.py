from rest_framework import serializers

from .models import Game
from players.views import PlayerViewSet

class GameSerializer(serializers.ModelSerializer):
    in_game = serializers.SerializerMethodField(method_name='is_in_game')
    is_turn = serializers.SerializerMethodField(method_name='is_player_turn')
    status = serializers.SerializerMethodField()
    player_names = serializers.SerializerMethodField()

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
            'is_turn',
            'status',
            'player_names'

        )

    def is_in_game(self, obj):
        user = self.context['request'].user
        return not user.is_anonymous() and user.player in obj.players.get_queryset()

    def is_player_turn(self, obj):
        user = self.context['request'].user
        return not user.is_anonymous() and obj.in_progress and user.player.pk == obj.next_player.pk

    def get_status(self, obj):
        if obj.done:
            return 'Complete'
        elif obj.in_progress and not self.is_in_game(obj):
            return 'In progress'
        elif obj.in_progress and self.is_in_game(obj) and self.is_player_turn(obj):
            return 'Your turn'
        elif obj.in_progress and self.is_in_game(obj) and not self.is_player_turn(obj):
            return 'Not your turn'
        elif obj.done:
            return 'Game is complete'
        return 'Waiting for players'

    def get_player_names(self, obj):
        return [player.user.username for player in obj.players.all()]
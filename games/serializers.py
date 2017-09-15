from rest_framework import serializers

from .models import Game

class GameSerializer(serializers.HyperlinkedModelSerializer):

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
        )
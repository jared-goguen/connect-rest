from rest_framework import serializers

from .models import Game

class GameSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Game
        fields = (
        	'url', 
        	'players', 
        	'board', 
        	'history', 
        	'turn', 
        	'winner', 
        	'done', 
        	'can_join', 
        	'in_progress',
        	'max_players'
    	)
from rest_framework import serializers

from .models import Player

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Player
        fields = ('url', 'user', 'name', 'games')
from rest_framework import serializers

from django.contrib.auth.models import User
from players.models import Player
from players.serializers import PlayerSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)        
        user.save()
        return user
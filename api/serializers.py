from rest_framework import serializers

from django.contrib.auth.models import User
from players.models import Player

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'player')

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user
from rest_framework import viewsets

from .models import Game
from .serializers import GameSerializer

from rest_framework.response import Response
from rest_framework import status

from players.serializers import PlayerSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def create(self, request, *args, **kwargs):
        player = request.user.player
        serialized_player = PlayerSerializer(player, context={'request': request})
        request.data['owner'] = serialized_player.data['url']
        request.data['players'] = [serialized_player.data['url']]
        return super(GameViewSet, self).create(request, *args, **kwargs)
from rest_framework import viewsets, response, permissions

from .models import Player
from .serializers import PlayerSerializer
from api.serializers import UserSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return response.Response(PlayerSerializer(request.user.player,
                context={'request': request}).data)
        return super(PlayerViewSet, self).retrieve(request, pk)
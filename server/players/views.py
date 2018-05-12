from rest_framework import viewsets, response, permissions

from .models import Player
from .serializers import PlayerSerializer
from api.serializers import UserSerializer
from games.serializers import GameSerializer
from games.models import Game
from django.http import JsonResponse

from rest_framework.decorators import api_view


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

    def retrieve(self, request, pk=None):
        print('pk')
        if pk == 'i':
            return response.Response(PlayerSerializer(request.user.player,
                context={'request': request}).data)
        return super(PlayerViewSet, self).retrieve(request, pk)


@api_view(['GET'])
def player_open_games(request):
	player = request.user.player
	games = player.games.filter(full=False)
	serialized_games = [GameSerializer(g, context={'request': request}).data for g in games]
	return JsonResponse({'games': serialized_games})


@api_view(['GET'])
def player_current_games(request):
	player = request.user.player
	games = player.games.filter(in_progress=True)
	serialized_games = [GameSerializer(g, context={'request': request}).data for g in games]
	return JsonResponse({'games': serialized_games})
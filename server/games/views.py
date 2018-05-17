from rest_framework import viewsets

from .models import Game
from .serializers import GameSerializer

from rest_framework.response import Response
from rest_framework import status

from players.serializers import PlayerSerializer
from django.http import JsonResponse

from rest_framework.decorators import api_view

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def create(self, request, *args, **kwargs):
        player = request.user.player
        serialized_player = PlayerSerializer(player, context={'request': request})
        request.data['owner'] = player.pk
        request.data['players'] = [player.pk]
        return super(GameViewSet, self).create(request, *args, **kwargs)


@api_view(['GET', 'POST'])
def open_games(request):
    games = Game.objects.filter(full=False)
    serialized_games = [GameSerializer(g, context={'request': request}).data for g in games]
    return JsonResponse({'games': serialized_games})


@api_view(['GET', 'POST'])
def current_games(request, start=0, stop=-1):
    start, stop = int(start), int(stop)
    if stop == -1:
        games = Game.objects.filter(in_progress=True)[start:]
    else:
        games = Game.objects.filter(in_progress=True)[start:stop]

    serialized_games = [GameSerializer(g, context={'request': request}).data for g in games]
    return JsonResponse({'games': serialized_games})


@api_view(['POST'])
def join_game(request, id):
    player = request.user.player
    game = Game.objects.get(pk=id)
    message_type, message = game.add_player(player)
    return JsonResponse({'success': message_type, 'message': message})


@api_view(['POST'])
def move(request, id):
    game = Game.objects.get(pk=id)
    user = request.user
    row = request.data['row']
    col = request.data['col']
    message_type, message = game.make_move(user, row, col)
    return JsonResponse({
        'success': message_type, 
        'message': message, 
        'game': GameSerializer(game, context={'request': request}).data
    })



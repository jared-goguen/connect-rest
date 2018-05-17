import re

from django.conf.urls import url, include

from .routers import RedirectAPIRootRouter
from .views import IndexView
from games.views import GameViewSet
from players.views import PlayerViewSet
from ai.views import get_move
from api.views import UserViewSet
from games.views import join_game, move, open_games, current_games
from players.views import player_open_games, player_current_games

from rest_framework.authtoken.views import obtain_auth_token

# Custom router so that '^$' can still be used as the home page.
router = RedirectAPIRootRouter(r'^api/$')

# Register all the api endpoints.
router.register(r'api/users', UserViewSet)
router.register(r'api/games', GameViewSet)
router.register(r'api/players', PlayerViewSet)

# Wire up our API using automatic URL routing.
# Include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api/ai/get_move/$', get_move),
    url(r'^api/games/open$', open_games),
    url(r'^api/games/current$', current_games),
    url(r'^api/games/current_([0-9]+)_([0-9]+)$', current_games),
    url(r'^api/games/join/([0-9]+)/$', join_game),
    url(r'^api/games/move/([0-9]+)/$', move),
    url(r'^api/players/open$', player_open_games),
    url(r'^api/players/current$', player_current_games),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/obtain-auth-token/$', obtain_auth_token),
    url(r'^.*', IndexView.as_view(), name='index')
]
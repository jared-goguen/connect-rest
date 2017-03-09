import re

from django.conf.urls import url, include

from .routers import RedirectAPIRootRouter
from .views import UserViewSet, GroupViewSet
from games.views import GameViewSet
from instances.views import InstanceViewSet
from players.views import PlayerViewSet

from app.views import IndexView


# Custom router so that '^$' can still be used as the home page.
router = RedirectAPIRootRouter(r'^api/$')

# Register all the api endpoints.
router.register(r'api/users', UserViewSet)
router.register(r'api/groups', GroupViewSet)
router.register(r'api/games', GameViewSet)
router.register(r'api/instances', InstanceViewSet)
router.register(r'api/players', PlayerViewSet)

# Wire up our API using automatic URL routing.
# Include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^api-auth/', include('rest_framework.urls'))
]
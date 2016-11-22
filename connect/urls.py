from django.conf.urls import url, include
from rest_framework import routers

from .views import UserViewSet, GroupViewSet
from games.views import GameViewSet
from instances.views import InstanceViewSet
from players.views import PlayerViewSet


router = routers.DefaultRouter()
router.register(r'api/users', UserViewSet)
router.register(r'api/groups', GroupViewSet)
router.register(r'api/games', GameViewSet)
router.register(r'api/instances', InstanceViewSet)
router.register(r'api/players', PlayerViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls'))
]
from rest_framework import viewsets

from .models import Instance
from .serializers import InstanceSerializer


class InstanceViewSet(viewsets.ModelViewSet):
    queryset = Instance.objects.all()
    serializer_class = InstanceSerializer

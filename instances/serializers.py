from rest_framework import serializers

from .models import Instance

class InstanceSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Instance
        fields = ('url', 'name', 'games')
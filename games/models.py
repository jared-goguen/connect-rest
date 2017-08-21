from __future__ import unicode_literals

from django.db import models

from players.models import Player
from instances.models import Instance


class Game(models.Model):
    player = models.ForeignKey(Player, related_name='games')
    instances = models.ManyToManyField(Instance, related_name='games')

from __future__ import unicode_literals

from django.db import models

from players.models import Player


class Game(models.Model):
    players = models.ManyToManyField(Player, related_name='games')

from __future__ import unicode_literals

from django.db import models

from django.contrib.auth.models import User

class Player(models.Model):
    user = models.OneToOneField(User)

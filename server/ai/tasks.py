from celery import shared_task
from players.models import Player

['Bob', 'Pete', 'Carl', 'Adam', 'Jess', 'Anna', 'Betsy', 'Pam']


class Bot:
	def __init__(self, name):
		self.player = Player.objects.get(name)




@shared_task
def add():
	print('hey, being called')


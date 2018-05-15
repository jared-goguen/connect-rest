from django.contrib.auth.models import User
from games.models import Game
from random import choice


class Bot:
	CONCURRENT_GAMES = 4

	def __init__(self, name):
		self.name = name
		self.player = User.objects.get(username=name).player

	def get_active_games(self):
		return self.player.games.filter(in_progress=True)

	def make_moves(self, games):
		for game in games:
			if game.is_turn(self.player):
				move = choice(game.get_valid_moves())
				success, message = game.make_move(self.player, *move)

	def join_open_game(self, open_games):
		game = choice(open_games)
		game.add_player(self.player)

	def create_new_game(self, title):
		Game.create(self.player, title)

	def join_game(self):
		open_games = Game.objects.filter(full=False)
		if open_games:
			self.join_open_game(open_games)
		else:
			self.create_new_game(f'{self.name}\'s game')

	def automate_actions(self):
		active_games = self.get_active_games()
		self.make_moves(active_games)

		for _ in range(Bot.CONCURRENT_GAMES - active_games.count()):
			self.join_game()


bot_names = ['Bob'] #, 'Pete', 'Carl', 'Adam', 'Jess', 'Anna', 'Betsy', 'Pam']
bots = [Bot(name) for name in bot_names]
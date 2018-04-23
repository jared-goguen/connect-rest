from __future__ import unicode_literals

import json

from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin, messages
from django.contrib.postgres.fields import JSONField

from players.models import Player

from random import shuffle


def default_board(rows=6, cols=7):
    return [[-1] * cols] * rows

def default_history():
    return []

def default_order():
    return []


class Game(models.Model):
    class Meta:
        ordering = ('created',)

    created = models.DateTimeField(auto_now_add=True)
    title = models.TextField(max_length=30)
    players = models.ManyToManyField(Player, related_name='games', blank=True)
    board = JSONField(default=default_board)
    history = JSONField(default=default_history)
    turn = models.IntegerField(default=-1)
    winner = models.ForeignKey(Player, related_name='winner', null=True)
    done = models.BooleanField(default=False)
    full = models.BooleanField(default=False)
    started = models.BooleanField(default=False)
    max_players = models.IntegerField(default=2)
    order = JSONField(default=default_order)
    next_player = models.ForeignKey(Player, related_name='next_player', null=True)
    connect = models.IntegerField(default=4)
    owner = models.ForeignKey(Player, related_name='owner')


    @property
    def status(self):
        if self.done:
            return 'Complete'
        elif self.started:
            return 'In progress'
        return 'Waiting for players'

    @property
    def in_game(self, player):
        return player in self.players


    def add_player(self, player):

        if player in self.players.all():
            return (messages.ERROR, 'You are already in Game #{}'.format(self.id))

        elif not self.full:
            self.players.add(player)

            if len(self.players.all()) == self.max_players:
                self.full = True
                self.start_game()

            self.save()
            return (messages.SUCCESS, 'You have successfully joined Game #{}'.format(self.id))
        
        else:
            return (messages.ERROR, 'Game is full')

    def start_game(self):
        self.started = True
        shuffle(self.order)
        self.advance_turn()
        self.save()

    # does not save on it's own...
    def advance_turn(self):
        self.turn = (self.turn + 1) % self.max_players
        pk = self.order[self.turn]
        self.next_player = self.players.get(pk=pk)

    def check_valid_position(self, row, col):
        if row < 0 or row >= self.rows:
            return False
        if col < 0 or col >= self.cols:
            return False
        if self.board[row][col] != -1:
            return False
        if row != 0 and self.board[row-1][col] == -1:
            return False
        return True

    def get_valid_moves(self):
        positions = []
        for col in range(self.cols):
            for row in range(self.rows):
                if self.board[row][col] == -1:
                    positions.append((row, col))
                    break
        return positions

    def make_move(self, user, row, col):
        if not self.is_turn(user):
            return messages.ERROR, 'It is not your turn...'
        
        if not self.check_valid_position(row, col):
            return messages.ERROR, 'That is not a valid move...'

        self.board[row][col] = self.turn
        
        if self.check_victory():
            self.assign_victor(self.next_player)
            self.save()
            return messages.SUCCESS, 'You won!'
        elif self.is_full():
            self.assign_victor(None)
            self.save()
            return messages.SUCCESS, 'The game is a draw...'
        else:
            self.advance_turn()
            self.save()
            return messages.SUCCESS, 'You have made your move!'

    def assign_victor(self, winner):
        self.done = True
        self.turn = -1
        self.winner = winner
        self.next_player = None

    def is_full(self):
        for col in self.board[-1]:
            if col == -1:
                return False
        return True

    def check_victory(self):     
        # check rows 
        for row in range(self.rows):
            for col in range(self.cols - self.connect + 1):
                for check in range(col, col + self.connect):
                    if self.board[row][check] != self.turn:
                        break
                else:
                    return True

        # check cols 
        for col in range(self.cols):
            for row in range(self.rows - self.connect + 1):
                for check in range(row, row + self.connect):
                    if self.board[check][col] != self.turn:
                        break
                else:
                    return True

        # check forward diagonal
        for row in range(self.rows - self.connect + 1):
            for col in range(self.cols - self.connect + 1):
                for add in range(self.connect):
                    if self.board[row + add][col + add] != self.turn:
                        break
                else:
                    return True

        # check backward diagonal
        for row in range(self.connect - 1, self.rows):
            for col in range(self.cols - self.connect + 1):
                for add in range(self.connect):
                    if self.board[row - add][col + add] != self.turn:
                        break
                else:
                    return True

        return False



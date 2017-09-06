# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-08-31 20:01
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import games.models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0001_initial'),
        ('games', '0002_auto_20170831_1524'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='game',
            options={'ordering': ('created',)},
        ),
        migrations.RenameField(
            model_name='game',
            old_name='in_progress',
            new_name='started',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='max_players',
            new_name='total_players',
        ),
        migrations.RemoveField(
            model_name='game',
            name='can_join',
        ),
        migrations.RemoveField(
            model_name='game',
            name='history',
        ),
        migrations.AddField(
            model_name='game',
            name='cols',
            field=models.IntegerField(default=7),
        ),
        migrations.AddField(
            model_name='game',
            name='connect',
            field=models.IntegerField(default=4),
        ),
        migrations.AddField(
            model_name='game',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='game',
            name='full',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='game',
            name='next_player',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='next_player', to='players.Player'),
        ),
        migrations.AddField(
            model_name='game',
            name='order',
            field=django.contrib.postgres.fields.jsonb.JSONField(default=games.models.default_order),
        ),
        migrations.AddField(
            model_name='game',
            name='rows',
            field=models.IntegerField(default=6),
        ),
        migrations.AddField(
            model_name='game',
            name='title',
            field=models.TextField(default='old_game', max_length=30),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='game',
            name='players',
            field=models.ManyToManyField(blank=True, related_name='games', to='players.Player'),
        ),
        migrations.AlterField(
            model_name='game',
            name='turn',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='game',
            name='winner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='winner', to='players.Player'),
        ),
    ]
# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-06 16:21
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0001_initial'),
        ('games', '0004_auto_20170906_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='players.Player'),
            preserve_default=False,
        ),
    ]
# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-08-22 17:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('players', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('players', models.ManyToManyField(related_name='games', to='players.Player')),
            ],
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-12 19:16
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='tracking',
        ),
    ]
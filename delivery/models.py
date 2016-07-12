from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Pizza(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=5, decimal_places=2)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pizzas = models.ManyToManyField(Pizza)
    total = models.DecimalField(max_digits=7, decimal_places=2)
    status = models.CharField(max_length=30)

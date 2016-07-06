from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from delivery.serializers import *
from delivery.models import Pizza, Order
from django.shortcuts import render, render_to_response
from django.template import RequestContext


def index(request):
    return render(request, 'index.html')

def handler404(request):
    response = render_to_response('index.html', {},
                                  context_instance=RequestContext(request))
    response.status_code = 200
    return response


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PizzaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer

class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'pizzas/get', views.PizzaViewSet)
router.register(r'orders/get', views.GetOrderViewSet)
router.register(r'orders/new', views.NewOrderViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', obtain_jwt_token),
]

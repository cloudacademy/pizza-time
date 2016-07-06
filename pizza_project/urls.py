from django.conf.urls import url, include
from rest_framework import routers
from delivery import views,urls
from rest_framework_jwt.views import obtain_jwt_token

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include('delivery.urls')),
    url(r'^auth/', obtain_jwt_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

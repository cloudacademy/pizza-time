from django.conf.urls import url, include
from rest_framework_jwt.views import obtain_jwt_token
from django.contrib import admin
from delivery import views
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [

    url(r'^$', include('delivery.urls')),
    url(r'^auth/', obtain_jwt_token),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

from django.conf.urls import url, include
from django.contrib import admin
from delivery import views
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [

    url(r'^api/', include('delivery.urls')),
    url(r'^admin/', admin.site.urls),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^.*$', views.index, name='index'),
]

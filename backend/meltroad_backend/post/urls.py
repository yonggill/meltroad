from django.urls import include, path
from rest_framework import routers

from meltroad_backend.post import views

router = routers.DefaultRouter()
router.register(r'posts', views.PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
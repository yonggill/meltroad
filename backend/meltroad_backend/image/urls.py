from django.urls import include, path
from rest_framework import routers

from meltroad_backend.image import views

router = routers.DefaultRouter()
router.register(r'images', views.PostImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
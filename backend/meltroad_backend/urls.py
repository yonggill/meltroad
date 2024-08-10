
from django.contrib import admin
from django.urls import path, include
from meltroad_backend.post.urls import router as post

urlpatterns = [
    path('', include(post.urls)),
    path('admin/', admin.site.urls),
]

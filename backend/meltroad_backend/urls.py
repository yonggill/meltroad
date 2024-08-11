
from django.contrib import admin
from django.urls import path, include
from meltroad_backend.post.urls import router as post
from meltroad_backend.image.urls import router as image
from meltroad_backend.category.urls import router as category

urlpatterns = [
    path('', include(post.urls)),
    path('', include(image.urls)),
    path('', include(category.urls)),
    path('admin/', admin.site.urls),
]

from rest_framework import permissions, viewsets

from meltroad_backend.category.models import Category, CategorySerializer


# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
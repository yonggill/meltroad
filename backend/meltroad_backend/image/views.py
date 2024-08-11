from rest_framework import permissions, viewsets

from meltroad_backend.image.models import PostImage, PostImageSerializer


# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = PostImage.objects.all()
    serializer_class = PostImageSerializer
    permission_classes = [permissions.AllowAny]
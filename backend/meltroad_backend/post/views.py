from rest_framework import permissions, viewsets

from meltroad_backend.post.models import PostSerializer, Post


# Create your views here.

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(date_published__isnull=False)
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]
from django.db import models
from rest_framework import serializers
from meltroad_backend.image.models import PostImageSerializer
# Create your models here.


def upload_post_meta_image(instance, filename):
    return f"post/{instance.post.id}/meta-img-{filename}"

class Post(models.Model):
    title = models.CharField(max_length=100, default="")
    slug = models.CharField(max_length=100, default="")
    content = models.TextField()
    meta_description = models.CharField(max_length=200)
    meta_image = models.ImageField(upload_to=upload_post_meta_image)
    reading_minutes = models.IntegerField(default=0)
    date_published = models.DateTimeField()


class PostSerializer(serializers.ModelSerializer):
    images = PostImageSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

from django.db import models
from rest_framework import serializers

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100, default="")
    slug = models.CharField(max_length=100, default="")
    content = models.TextField()
    meta_description = models.CharField(max_length=200)
    meta_image = models.ImageField()
    reading_minutes = models.IntegerField(default=0)
    date_published = models.DateTimeField()


class PostSerializer(serializers.ModelSerializer):
    meta_image_url = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = '__all__'

    def get_meta_image_url(self, obj):
        return f"/{obj.meta_image.name}"
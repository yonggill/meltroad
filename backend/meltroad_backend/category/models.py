from django.db import models
from rest_framework import serializers
from meltroad_backend.post.models import PostSerializer
# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=100, default="")
    slug = models.CharField(max_length=100, default="")


class CategorySerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'



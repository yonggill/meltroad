from django.db import models
from rest_framework import serializers

# Create your models here.
class PostImage(models.Model):
    post = models.ForeignKey('post.Post', related_name="images", on_delete=models.CASCADE)
    image_file = models.ImageField()


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'
    
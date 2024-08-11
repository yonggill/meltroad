from django.db import models
from rest_framework import serializers

def upload_post_image(instance, filename):
    return f"post/{instance.post.id}/content-img-{filename}"

class PostImage(models.Model):
    post = models.ForeignKey('post.Post', related_name="images", on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to=upload_post_image)


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'
    
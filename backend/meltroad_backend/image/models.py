from django.db import models

# Create your models here.
class PostImage(models.Model):
    post = models.ForeignKey('post.Post', related_name="images", on_delete=models.CASCADE)
    image_file = models.ImageField()

# Generated by Django 5.1 on 2024-08-13 14:39

import meltroad_backend.post.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_post_category_alter_post_meta_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date_published',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='meta_image',
            field=models.ImageField(null=True, upload_to=meltroad_backend.post.models.upload_post_meta_image),
        ),
    ]

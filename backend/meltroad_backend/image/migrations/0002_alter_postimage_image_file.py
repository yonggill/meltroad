# Generated by Django 5.1 on 2024-08-11 14:44

import meltroad_backend.image.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('image', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postimage',
            name='image_file',
            field=models.ImageField(upload_to=meltroad_backend.image.models.upload_post_image),
        ),
    ]

# Generated by Django 5.1 on 2024-08-10 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100)),
                ('slug', models.CharField(default='', max_length=100)),
                ('content', models.TextField()),
                ('meta_description', models.CharField(max_length=200)),
                ('meta_image', models.ImageField(upload_to='')),
                ('reading_minutes', models.IntegerField(default=0)),
                ('date_published', models.DateTimeField()),
            ],
        ),
    ]

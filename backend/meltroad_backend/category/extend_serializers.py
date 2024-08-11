from rest_framework import serializers
from meltroad_backend.category.models import Category

class CategoryOnlySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
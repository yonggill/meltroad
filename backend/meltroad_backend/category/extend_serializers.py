from rest_framework import serializers

class CategoryOnlySerializer(serializers.ModelSerializer):

    class Meta:
        model = 'category.Category'
        fields = '__all__'
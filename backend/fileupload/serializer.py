from rest_framework.serializers import ModelSerializer, FileField, Serializer
from .models import File

class FileUploadSerializer(ModelSerializer):
    class Meta:
        model = File
        fields = ['file']
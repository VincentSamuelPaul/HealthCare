from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import File
from rest_framework.parsers import FormParser, MultiPartParser
from .serializer import FileUploadSerializer
from rest_framework.viewsets import ViewSet
from rest_framework import permissions
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    context = {1 : 'vincent', 2 : 'paul'}
    return Response(context)


@permission_classes(IsAuthenticated)
@api_view(['POST'])
def uploadFile(request):
    print('hello')
    print(request.FILES)
    file = File(file=request.FILES['fileName'])
    file.save()
    return Response("Done")
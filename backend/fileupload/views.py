from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import File

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    context = {1 : 'vincent', 2 : 'paul'}
    return Response(context)


@permission_classes(IsAuthenticated)
@api_view(['POST'])
def uploadFile(request):
    file = File(file=request.FILES['fileName'])
    file.save()
    return Response("Done")
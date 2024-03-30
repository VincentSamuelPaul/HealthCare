from django.urls import path, include
from .import views
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("routes/", views.getRoutes, name="routes"),
    # path("", views.UploadFile.as_view(), name="uploadFile"),
    path("", views.uploadFile, name="uploadfile"),
]
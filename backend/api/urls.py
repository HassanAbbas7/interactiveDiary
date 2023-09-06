from django.contrib import admin
from django.urls import path, include
from api import urls
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('testing/', views.Test.as_view()),
    path('get-diaries/', views.DiaryList.as_view())
]

router = DefaultRouter()
router.register('user', views.UserViewSet, basename='user')
router.register('diary-entry', views.DiaryEntry, basename='diary-entry')
urlpatterns += router.urls

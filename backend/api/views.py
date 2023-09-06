from django.shortcuts import render, HttpResponseRedirect, redirect, HttpResponse
from .serializer import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from .models import *


User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()
    print("triggered the class")
    # given by murshid:

    def create(self, request):
        print("triggered the create")
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(**serializer.validated_data)
            return Response({'status': 'success'})
        else:
            return Response(serializer.errors, status=400)



class Test(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        return Response("hi")

# an apiview to get total number of diary entries of the user
class DiaryCount(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = CustomUser.objects.get(email=request.user)
        # get total number of diaries linked to this user
        diaries = Diary.objects.filter(user=user)
        return Response(len(diaries))
    
# a model view set to make and get diaries
class DiaryEntry(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = DiarySerializer
    queryset = Diary.objects.all()
    # a create function
    def create(self, request):
        serializer = DiarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'success'})
        else:
            return Response(serializer.errors, status=400)
        

# return all diaries titles and some content according to the user
class DiaryList(APIView):
    permission_classes = (AllowAny,)
    def get(self, request):
        user = CustomUser.objects.get(email="test@gmail.com")
        diaries = Diary.objects.filter(user=user)
        serializer = DiarySerializer(diaries, many=True)
        return Response(serializer.data)


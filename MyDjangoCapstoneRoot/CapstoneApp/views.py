from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from .models import Message
from django.http import HttpResponse


def serve_react_app(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse("Welcome to my Django Capstone project!")


@api_view(['GET'])
def get_random_message(request):
    user_name = request.GET.get('name', 'Friend')
    messages = Message.objects.all()
    random_message = random.choice(messages)
    personalized_message = random_message.text.replace(
        '{name}', user_name)  # Replacing placeholder with user's name
    image_url = random_message.image_url
    return Response({"message": personalized_message, "image_url": image_url})

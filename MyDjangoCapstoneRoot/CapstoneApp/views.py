from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from .models import Message


@api_view(['GET'])
def get_random_message(request):
    user_name = request.GET.get('name', 'Friend')
    messages = Message.objects.all()
    random_message = random.choice(messages)
    personalized_message = random_message.content.replace(
        '{name}', user_name)  # Replacing placeholder with user's name
    return Response({"message": personalized_message})

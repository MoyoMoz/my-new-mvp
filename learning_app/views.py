from django.shortcuts import render
from .models import Topic

def topic_list(request):
    topics = Topic.objects.all()  # Query the database to get all topics
    return render(request, 'learning_app/topic_list.html', {'topics': topics})


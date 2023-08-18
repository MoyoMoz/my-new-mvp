from django.urls import path
from .views import get_random_message, serve_react_app

urlpatterns = [
    path('random-message/', get_random_message, name='random-message'),
    path('', serve_react_app, name='react_app'),
]

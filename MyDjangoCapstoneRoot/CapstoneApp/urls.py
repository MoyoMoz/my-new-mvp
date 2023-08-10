from django.urls import path
from .views import get_random_message

urlpatterns = [
    path('api/random-message/', get_random_message, name='random-message'),
]


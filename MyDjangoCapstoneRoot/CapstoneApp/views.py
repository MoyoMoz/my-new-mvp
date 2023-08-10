from django.http import JsonResponse
import random
from .models import MotivationalMessage

def get_random_message(request):
    name = request.GET.get('name', 'Friend')
    messages = MotivationalMessage.objects.all()
    if not messages:
        return JsonResponse({"message": f"Welcome, {name}! Keep coding and never give up!"})
    
    random_message = random.choice(messages).message
    personalized_message = random_message.replace("{name}", name)
    return JsonResponse({"message": personalized_message})













# from django.http import JsonResponse
f#rom rest_framework.decorators import api_view
#from .models import Message
#from .serializers import MessageSerializer
#import random

#@api_view(['GET'])
#def get_random_message(request):
 #   messages = Message.objects.all()
  #  random_message = random.choice(messages)
   # serializer = MessageSerializer(random_message)
   # return JsonResponse(serializer.data) 

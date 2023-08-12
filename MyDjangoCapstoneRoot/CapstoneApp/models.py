from django.db import models

class Message(models.Model):
    text = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/') # Path to the image

    def __str__(self):
        return self.text

from django.db import models

class Message(models.Model):
    text = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', default='MyDjangoCapstoneRoot/media/pic22.png')

    def __str__(self):
        return self.text



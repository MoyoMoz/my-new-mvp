from django.db import models


class Message(models.Model):
    text = models.TextField()
    image_url = models.URLField()

    def __str__(self):
        return self.text

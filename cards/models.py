from django.db import models


class Card(models.Model):
    title = models.CharField(max_length=255)
    image_url = models.URLField()
    message = models.TextField()

    def __str__(self):
        return self.title

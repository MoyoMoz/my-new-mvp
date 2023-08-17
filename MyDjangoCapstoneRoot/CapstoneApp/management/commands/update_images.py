from django.core.management.base import BaseCommand
from CapstoneApp.models import Message

BASE_URL = 'https://my-new-mvp-images.s3.us-west-2.amazonaws.com/pic{}.png'


class Command(BaseCommand):
    help = 'Update the image URLs for all the messages in the database'

    def handle(self, *args, **kwargs):
        all_messages = Message.objects.all()

        for idx, message in enumerate(all_messages, 1):
            message.image_url = BASE_URL.format(idx)
            message.save()

        self.stdout.write(self.style.SUCCESS(
            f'Updated {len(all_messages)} messages with image URLs.'))

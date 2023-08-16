from CapstoneApp.models import Message

BASE_URL = 'https://my-new-mvp-images.s3.us-west-2.amazonaws.com/pic{}.png'


def update_message_images():
    all_messages = Message.objects.all()

    for idx, message in enumerate(all_messages, 1):
        message.image_url = BASE_URL.format(idx)
        message.save()

    print(f"Updated {len(all_messages)} messages with image URLs.")

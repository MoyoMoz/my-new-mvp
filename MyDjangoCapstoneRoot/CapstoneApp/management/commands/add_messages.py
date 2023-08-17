from CapstoneApp.models import Message
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'Add messages to the database'

    def handle(self, *args, **kwargs):

        messages = [
            "{name}, your journey at Ada Academy has shaped you into a remarkable coder. Your future is bright, and the world awaits your creations.",
            "{name}, graduation is not the end; it's just the beginning. The skills and friendships you've forged at Ada Academy will carry you far.",
            "{name}, you've conquered challenges and excelled in your studies. As you graduate from Ada Academy, know that success is yours to embrace.",
            "Embrace the future with open arms, {name}. Your hard work at Ada Academy has paid off, and a world of opportunities is now open to you.",
            "You've done it, {name}! Your graduation from Ada Academy marks the start of a new adventure. Continue to strive and never stop learning.",
            "{name}, the dedication and passion you've shown at Ada Academy are inspiring. May your graduation be the beginning of a fulfilling career.",
            "Your dreams are valid, {name}. This graduation from Ada Academy is a testament to your talent and determination. Keep reaching for the stars!",
            "{name}, your time at Ada Academy has been a journey of growth and discovery. As you graduate, take with you the wisdom and courage to excel.",
            "With graduation, {name}, you close one chapter and open another. Ada Academy has prepared you well. Now, the world is your canvas.",
            "{name}, your graduation from Ada Academy is a monumental achievement. May you continue to grow and inspire others with your talents.",
            "Keep shining, {name}. Your graduation from Ada Academy is just one of many milestones. The future holds endless possibilities for you.",
            "You've earned this moment, {name}. Celebrate your graduation from Ada Academy and look forward to the incredible journey that awaits you.",
            "{name}, your Ada Academy graduation is a stepping stone to greater heights. Continue to learn, grow, and make a positive impact.",
            "With pride and joy, we celebrate you, {name}. Your graduation from Ada Academy reflects your hard work and dedication. The sky's the limit!",
            "This is your time, {name}. Your graduation from Ada Academy marks a significant milestone. Embrace the opportunities and challenges ahead.",
            "{name}, your Ada Academy experience has molded you into a promising developer. As you graduate, may success and fulfillment be yours.",
            "Graduating from Ada Academy is a remarkable accomplishment, {name}. May your future be as bright and promising as the effort you've put in.",
            "You've made it, {name}! Your graduation from Ada Academy is a testament to your perseverance. Keep striving, and never stop dreaming.",
            "{name}, your graduation from Ada Academy is just the beginning. Continue to challenge yourself, and greatness will surely follow.",
        ]

        for text in messages:
            message = Message(text=text)
            message.save()

        self.stdout.write(self.style.SUCCESS('Messages added successfully!'))

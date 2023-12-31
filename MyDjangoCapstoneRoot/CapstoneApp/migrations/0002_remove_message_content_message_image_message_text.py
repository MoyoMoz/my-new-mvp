# Generated by Django 4.2.4 on 2023-08-12 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CapstoneApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='content',
        ),
        migrations.AddField(
            model_name='message',
            name='image',
            field=models.ImageField(default='MyDjangoCapstoneRoot/media/pic22.png', upload_to='images/'),
        ),
        migrations.AddField(
            model_name='message',
            name='text',
            field=models.CharField(default='{name}, believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.', max_length=200),
            preserve_default=False,
        ),
    ]

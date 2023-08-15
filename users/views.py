# users/views.py
# Create your views here.
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.conf import settings


def logout_view(request):
    # Log out the user from Django
    logout(request)
    # Redirect to Auth0 logout, with a URL to redirect back to after logout
    return redirect(f'https://{settings.AUTH0_DOMAIN}/v2/logout?returnTo={settings.LOGOUT_REDIRECT_URL}')

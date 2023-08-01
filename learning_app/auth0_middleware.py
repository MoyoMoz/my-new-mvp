import json
import requests
from jose import jwt
from django.http import HttpResponse
from django.conf import settings

def auth_middleware(get_response):
    def middleware(request):
        auth_header = request.META.get('HTTP_AUTHORIZATION', '').split()
        if len(auth_header) == 2 and auth_header[0].lower() == 'bearer':
            token = auth_header[1]
            jsonurl = requests.get(f'https://{settings.AUTH0_DOMAIN}/.well-known/jwks.json')
            jwks = json.loads(jsonurl.text)
            rsa_key = {}
            for key in jwks["keys"]:
                if key["kid"] == jwt.get_unverified_header(token)["kid"]:
                    rsa_key = {
                        "kty": key["kty"],
                        "kid": key["kid"],
                        "use": key["use"],
                        "n": key["n"],
                        "e": key["e"]
                    }
            try:
                payload = jwt.decode(
                    token,
                    rsa_key,
                    algorithms=['RS256'],
                    audience=settings.AUTH0_AUDIENCE,
                    issuer=f'https://{settings.AUTH0_DOMAIN}/'
                )
            except jwt.ExpiredSignatureError:
                return HttpResponse('Token is expired', status=401)
            except jwt.JWTClaimsError:
                return HttpResponse('Invalid claims. Please, check the audience and issuer.', status=401)
            except Exception:
                return HttpResponse('Unable to parse authentication token.', status=401)
            request.user = payload
        response = get_response(request)
        return response
    return middleware

from rest_framework.authtoken.models import Token
from django.http import HttpResponse
import jwt

class JWTAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if auth_header and auth_header.startswith('Bearer '):
            token = auth_header.split(' ')[1]
            try:
                payload = jwt.decode(token, 'secret', algorithms=['HS256'])
                request.user = payload['user_id']
            except jwt.InvalidTokenError:
                return HttpResponse('Invalid token', status=401)
        return self.get_response(request)
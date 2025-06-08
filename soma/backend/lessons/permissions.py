from rest_framework.permissions import BasePermission, IsAuthenticated

class IsInstructorOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        return request.user.is_authenticated and request.user.role in ['instructor', 'admin']

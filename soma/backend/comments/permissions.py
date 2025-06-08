from rest_framework.permissions import BasePermission, IsAuthenticated

class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        return request.user.is_authenticated and (obj.user == request.user or request.user.role == 'admin')
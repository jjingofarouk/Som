from rest_framework import permissions

class IsAdminOrIsSelf(permissions.BasePermission):
    def has_object_permission(self, request, obj):
        return request.user.is_authenticated and (request.user.is_admin or request.user == obj)
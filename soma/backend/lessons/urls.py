from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LessonViewSet

router = DefaultRouter()
router.register(r'', LessonViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

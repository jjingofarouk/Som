from rest_framework import viewsets
from .models import Lesson
from .serializers import LessonSerializer
from .permissions import IsInstructorOrReadOnly

class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [IsInstructorOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save()

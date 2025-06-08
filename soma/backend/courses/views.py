from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer
from .permissions import IsInstructorOrReadOnly

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsInstructorOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user)
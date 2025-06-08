from django.contrib.auth import get_user_model
from courses.models import Course
from lessons.models import Lesson
from comments.models import Comment

User = get_user_model()

def seed_data():
    # Create users
    admin = User.objects.create_superuser(email='admin@soma.com', password='admin123', role='admin')
    instructor = User.objects.create_user(email='instructor@soma.com', password='instructor123', role='instructor')
    learner = User.objects.create_user(email='learner@soma.com', password='learner123', role='learner')
    
    # Create course
    course = Course.objects.create(
        title='Introduction to Python',
        subtitle='Learn Python basics',
        description='Comprehensive Python course for beginners',
        instructor=instructor
    )
    
    # Create lessons
    lesson1 = Lesson.objects.create(
        title='Python Basics',
        course=course,
        content='Introduction to Python syntax',
        order=1
    )
    
    # Create comment
    Comment.objects.create(
        content='Great lesson!',
        user=learner,
        lesson=lesson1
    )

if __name__ == '__main__':
    seed_data()

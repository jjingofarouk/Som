from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('title', 'instructor__email')
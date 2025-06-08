from django.contrib import admin
from .models import Comment

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'user', 'lesson', 'created_at')
    list_filter = ('lesson', 'created_at')
    search_fields = ('content', 'user__email')
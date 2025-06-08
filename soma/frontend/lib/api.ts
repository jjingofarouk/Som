import { Course, Lesson, Comment, User } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}

export async function getCourses(): Promise<Course[]> {
  return fetchAPI('/courses/');
}

export async function getCourse(id: string): Promise<Course> {
  return fetchAPI(`/courses/${id}/`);
}

export async function createCourse(data: Partial<Course>): Promise<Course> {
  return fetchAPI('/courses/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updateCourse(id: string, data: Partial<Course>): Promise<Course> {
  return fetchAPI(`/courses/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function getLessons(courseId: string): Promise<Lesson[]> {
  return fetchAPI(`/lessons/?course=${courseId}`);
}

export async function getLesson(id: string): Promise<Lesson> {
  return fetchAPI(`/lessons/${id}/`);
}

export async function createLesson(courseId: string, data: Partial<Lesson>): Promise<Lesson> {
  return fetchAPI('/lessons/', {
    method: 'POST',
    body: JSON.stringify({ ...data, course: courseId }),
  });
}

export async function getComments(lessonId: string): Promise<Comment[]> {
  return fetchAPI(`/comments/?lesson=${lessonId}`);
}

export async function createComment(lessonId: string, data: Partial<Comment>): Promise<Comment> {
  return fetchAPI('/comments/', {
    method: 'POST',
    body: JSON.stringify({ ...data, lesson: lessonId }),
  });
}

export async function getUser(id: string): Promise<User> {
  return fetchAPI(`/users/${id}/`);
}

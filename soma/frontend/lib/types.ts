export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'learner' | 'instructor' | 'admin';
  bio: string;
  profile_picture: string | null;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: User;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  title: string;
  course: string;
  content: string;
  video_url: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
  lesson: string;
  created_at: string;
  updated_at: string;
}

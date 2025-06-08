import { User } from './types';

interface RegisterFormData extends Partial<User> {
  password?: string;
}

export async function login(email: string, password: string): Promise<User> {
  const response = await fetch('http://localhost:8000/api/users/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error('Login failed');
  return response.json();
}

export async function register(data: RegisterFormData): Promise<User> {
  const response = await fetch('http://localhost:8000/api/users/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Registration failed');
  return response.json();
}

export async function getCurrentUser(): Promise<User> {
  const response = await fetch('http://localhost:8000/api/users/me/', {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
}

export function logout(): void {
  localStorage.removeItem('token');
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '../../lib/auth';
import { User } from '../../lib/types';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: 'learner',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      router.push('/dashboard');
    } catch {
      setError('Registration failed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="first_name" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="last_name" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium">
          Role
        </label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="learner">Learner</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
}
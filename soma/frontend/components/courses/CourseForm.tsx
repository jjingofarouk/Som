'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCourse, updateCourse } from '../../lib/api';
import { Course } from '../../lib/types';

interface CourseFormProps {
  course?: Course;
}

export default function CourseForm({ course }: CourseFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: course?.title || '',
    subtitle: course?.subtitle || '',
    description: course?.description || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (course) {
        await updateCourse(course.id, formData);
      } else {
        await createCourse(formData);
      }
      router.push('/courses');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="subtitle" className="block text-sm font-medium">
          Subtitle
        </label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {course ? 'Update' : 'Create'} Course
      </button>
    </form>
  );
}

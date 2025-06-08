'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createLesson } from '../../lib/api';

interface LessonFormProps {
  courseId: string;
}

export default function LessonForm({ courseId }: LessonFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    video_url: '',
    order: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createLesson(courseId, formData);
      router.push(`/courses/${courseId}`);
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
        <label htmlFor="content" className="block text-sm font-medium">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          value={formData.content}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="video_url" className="block text-sm font-medium">
          Video URL
        </label>
        <input
          type="url"
          name="video_url"
          id="video_url"
          value={formData.video_url}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="order" className="block text-sm font-medium">
          Order
        </label>
        <input
          type="number"
          name="order"
          id="order"
          value={formData.order}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Create Lesson
      </button>
    </form>
  );
}

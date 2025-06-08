'use client';

import { useState } from 'react';
import { createComment } from '../../lib/api';
import { useRouter } from 'next/navigation';

interface CommentFormProps {
  lessonId: string;
}

export default function CommentForm({ lessonId }: CommentFormProps) {
  const router = useRouter();
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createComment(lessonId, { content });
      setContent('');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm"
        rows={4}
        placeholder="Add a comment..."
        required
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  );
}
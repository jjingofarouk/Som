'use client';

import { useState, useEffect } from 'react';
import { getComments } from '../api';
import { Comment } from '../types';

export function useComments(lessonId: string) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const data = await getComments(lessonId);
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [lessonId]);

  return { comments, loading };
}
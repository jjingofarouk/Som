'use client';

import { useState, useEffect } from 'react';
import { getLessons } from '../api';
import { Lesson } from '../types';

export function useLessons(courseId: string) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLessons() {
      try {
        const data = await getLessons(courseId);
        setLessons(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchLessons();
  }, [courseId]);

  return { lessons, loading };
}
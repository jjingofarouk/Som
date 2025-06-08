'use client';

import { useState, useEffect } from 'react';
import { getCourses } from '../api';
import { Course } from '../types';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  return { courses, loading };
}

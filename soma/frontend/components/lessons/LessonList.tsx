import Link from 'next/link';
import { getLessons } from '../../lib/api';
import { Lesson } from '../../lib/types';

interface LessonListProps {
  courseId: string;
}

export default async function LessonList({ courseId }: LessonListProps) {
  const lessons: Lesson[] = await getLessons(courseId);
  
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold mb-4">Lessons</h3>
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          href={`/courses/${courseId}/lessons/${lesson.id}`}
          className="block p-2 hover:bg-gray-100 rounded"
        >
          {lesson.title}
        </Link>
      ))}
    </div>
  );
}

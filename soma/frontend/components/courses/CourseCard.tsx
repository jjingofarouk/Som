import Link from 'next/link';
import Image from 'next/image';
import { Course } from '../../lib/types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="border rounded-lg p-4 hover:shadow-lg">
      <Image
        src={course.image || '/placeholder-course.jpg'}
        alt={course.title}
        width={300}
        height={200}
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold">{course.title}</h2>
      <p className="text-gray-600">{course.subtitle}</p>
    </Link>
  );
}

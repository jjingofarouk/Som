import { getCourses } from '../../lib/api';
import CourseCard from './CourseCard';
import { Course } from '../../lib/types';

export default async function CourseList() {
  const courses: Course[] = await getCourses();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

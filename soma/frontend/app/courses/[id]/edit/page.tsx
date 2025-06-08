import CourseForm from '../../../../components/courses/CourseForm';
import { getCourse } from '../../../../lib/api';

export default async function EditCourse({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Course</h1>
      <CourseForm course={course} />
    </div>
  );
}

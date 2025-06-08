import { getCourse } from '../../../lib/api';
import LessonList from '../../../components/lessons/LessonList';
import CommentSection from '../../../components/comments/CommentSection';

export default async function CoursePage({ params }: { params: { id: string } }) {
  const course = await getCourse(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-4">{course.description}</p>
      <LessonList courseId={params.id} />
      <CommentSection lessonId={null} />
    </div>
  );
}

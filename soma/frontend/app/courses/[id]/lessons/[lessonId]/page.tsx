import { getLesson } from '../../../../../lib/api';
import LessonViewer from '../../../../../components/lessons/LessonViewer';
import CommentSection from '../../../../../components/comments/CommentSection';

export default async function LessonPage({ params }: { params: { id: string, lessonId: string } }) {
  const lesson = await getLesson(params.lessonId);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <LessonViewer lesson={lesson} />
      <CommentSection lessonId={params.lessonId} />
    </div>
  );
}
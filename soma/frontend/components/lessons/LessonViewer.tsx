import { Lesson } from '../../lib/types';

interface LessonViewerProps {
  lesson: Lesson;
}

export default function LessonViewer({ lesson }: LessonViewerProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{lesson.title}</h2>
      {lesson.video_url && (
        <video controls className="w-full">
          <source src={lesson.video_url} type="video/mp4" />
        </video>
      )}
      <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
    </div>
  );
}

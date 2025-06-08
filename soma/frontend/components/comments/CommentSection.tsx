import { getComments } from '../../lib/api';
import CommentForm from './CommentForm';
import { Comment } from '../../lib/types';

interface CommentSectionProps {
  lessonId: string | null;
}

export default async function CommentSection({ lessonId }: CommentSectionProps) {
  const comments: Comment[] = lessonId ? await getComments(lessonId) : [];
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      {lessonId && <CommentForm lessonId={lessonId} />}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <p>{comment.content}</p>
            <p className="text-sm text-gray-600">
              By {comment.user.first_name} on {new Date(comment.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
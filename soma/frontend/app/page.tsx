import CourseList from '../components/courses/CourseList';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Soma</h1>
      <CourseList />
    </div>
  );
}
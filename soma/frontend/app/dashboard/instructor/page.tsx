import CourseList from '../../../components/courses/CourseList';

export default function InstructorDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Instructor Dashboard</h1>
      <CourseList />
    </div>
  );
}

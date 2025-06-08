import { getCurrentUser } from '../../lib/auth';

export default async function Dashboard() {
  const user = await getCurrentUser();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <p className="text-lg">Welcome, {user.first_name}!</p>
    </div>
  );
}

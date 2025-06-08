import { getUser } from '../../../lib/api';

export default async function Profile({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{user.first_name} {user.last_name}</h1>
      <p className="text-lg mb-4">{user.bio}</p>
    </div>
  );
}

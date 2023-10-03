import { useQuery } from 'react-query';
import axios from 'axios';

const UserList = () => {
  // Use useQuery to make GET requests and manage caching
  const { data, error, isLoading } = useQuery(['experts', 1], async () => {
    const response = await axios.get('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {data.map((user: any) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

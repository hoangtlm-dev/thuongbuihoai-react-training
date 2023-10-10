import { fetchData } from '../Helpers/useQuery';

const UserList = () => {
  // Use useQuery to make GET requests and manage caching
  const { data, error, isLoading } = fetchData();

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

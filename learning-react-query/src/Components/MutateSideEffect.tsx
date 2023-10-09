import { useMutation, useQuery, QueryClient } from "react-query";
import { useState } from "react";
import axios from "axios";

export const fetchUsers = async () => {
    const response = await axios.get('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts');
    return response.data;
  }

export const createUser = async (newUser: string) => {
    const response = await axios.post('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts', newUser);
    return response.data;
}

const CRUDUserList = () => {
    const queryClient = new QueryClient();
    const { data, error, isLoading } = useQuery('experts', fetchUsers);
    const [newUserName, setNewUserName] = useState('');
    const mutation = useMutation({
      mutationFn: createUser,
      onSuccess: () => {
        // After successfully creating the user, refresh the user list.
        queryClient.invalidateQueries('experts');
        // Delete the value input field.
        setNewUserName('');
        alert('Experts created successfully!');
      },
      onError: () => {
        alert('Error creating experts. Please try again later.');
      },
    });

    const handleAddUser = async () => {
      // A new user object will be created and sent to the API.
      const newUser = { name: newUserName };

      // Use mutate to create a new user.
      await mutation.mutateAsync(newUser as any);
    };

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {(error as any).message}</div>;
    }

    return (
      <>
      <h2>Mutate Side Effect</h2>
      <div>
        <input
          type="text"
          placeholder="Enter user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
        <ul>
          {data.map((user: any) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
      </>
    );
  }

export default CRUDUserList;

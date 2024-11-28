import { useMutation, useQuery, QueryClient } from "react-query";
import { useState } from "react";
import axios from "axios";
import { Expert } from "../example-crud-expert/interfaces/expert";
import { useMutationPostExpert } from "../example-crud-expert/hooks/useMutate";
import { useExperts } from "../example-crud-expert/hooks/useQuery";

export const fetchUsers = async () => {
  const response = await axios.get('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts');
  return response.data;
}

export const createUser = async (newUser: string) => {
  const response = await axios.post('https://63183dc9f6b281877c66cbe0.mockapi.io/api/experts', newUser);
  return response.data;
}

const CRUDUserList = () => {
  // const queryClient = new QueryClient();
  // const { data, error, isLoading } = useQuery('experts', fetchUsers);
  const { mutate, isLoading: isAdding, error } = useMutationPostExpert();
  const { data } = useExperts();
  const [newData, setNewData] = useState<Expert>();
  // const mutation = useMutation({
  //   mutationFn: createUser,
  //   onSuccess: () => {
  //     // After successfully creating the user, refresh the user list.
  //     queryClient.invalidateQueries('experts');
  //     // Delete the value input field.
  //     alert('Experts created successfully!');
  //   },
  //   onError: () => {
  //     alert('Error creating experts. Please try again later.');
  //   },
  // });

  const handleAddUser = async () => {
    // A new user object will be created and sent to the API.
    const newUser = {
      name: newData?.name,
      description: newData?.description,
      info: newData?.info
    };
    console.log('newUser', newUser);
    // Use mutate to create a new user.
    mutate(newUser as any);
  };

  if (isAdding) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as any).message}</div>;
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const key = event.target.name;
    console.log('value', value);
    setNewData({ ...newData, [key]: value });
  }

  return (
    <>
      <h2>Mutate Side Effect</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter user name"
          value={newData?.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter user des"
          value={newData?.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="info"
          placeholder="Enter info"
          value={newData?.info}
          onChange={handleChange}
        />
        <button onClick={handleAddUser}>Add User</button>
        <ul>
          {data?.map((user: any) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CRUDUserList;

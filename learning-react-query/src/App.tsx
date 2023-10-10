import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import CRUDUserList from './Components/MutateSideEffect';
import BackgroundFetching from './Components/BackgroundFetching';
import InfiniteQuery from './Components/InfiniteQuery';
import Mutations from './Components/Mutations';
import Input from './Components/ReactHookForm/Input';
import HandleError from './Components/ReactHookForm/HandleError';
import SendData from './Components/ReactHookForm/SendData';
import SchemaYup from './Components/ReactHookForm/SchemaYup';
import Watch from './Components/ReactHookForm/Watch';
import ResetField from './Components/ReactHookForm/ResetField';

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query */}
      <UserList />
      <AddUser />
      <CRUDUserList />
      <BackgroundFetching />
      {/* <Pagination /> */}
      <InfiniteQuery />
      <Mutations />

      {/* React Hook Form */}
      <Input />
      <HandleError />
      <SendData />
      <SchemaYup />
      <Watch />
      <ResetField />
    </QueryClientProvider>
  )
}

export default App

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
import SetError from './Components/ReactHookForm/SetError';
import ServerError from './Components/ReactHookForm/ServerError';
import Trigger from './Components/ReactHookForm/Trigger';
import ExampleController from './Components/ReactHookForm/Controller';
import ExampleUseWatch from './Components/ReactHookForm/UseWatch';
import ExampleUseFormState from './Components/ReactHookForm/UseFormState';
import ExampleErrorMessage from './Components/ReactHookForm/ErrorMessage';
import ExampleUseFieldArray from './Components/ReactHookForm/UseFieldArray';
import ExampleCounterStore from './Components/Zustand/CounterStore';
import ExampleUpdateState from './Components/Zustand/UpdateState';
import RestState from './Components/Zustand/ResetState';
import ExpertList from './example-crud-expert/components/ExpertList';

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* Example management Expert List */}
      <ExpertList />

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
      <SetError />
      <ServerError />
      <Trigger />
      <ExampleController />
      <ExampleUseWatch />
      <ExampleUseFormState />
      <ExampleErrorMessage />
      <ExampleUseFieldArray />

      {/* Zustand */}
      <ExampleCounterStore />
      <ExampleUpdateState />
      <RestState />
    </QueryClientProvider>
  )
}

export default App

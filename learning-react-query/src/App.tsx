import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import UserList from './Components/UserList'
import AddUser from './Components/AddUser'
import CRUDUserList from './Components/MutateSideEffect'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <AddUser />
      <CRUDUserList />
    </QueryClientProvider>
  )
}

export default App

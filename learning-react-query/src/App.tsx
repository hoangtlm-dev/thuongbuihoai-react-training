import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import UserList from './Components/UserList'
import AddUser from './Components/AddUser'
import CRUDUserList from './Components/MutateSideEffect'
import BackgroundFetching from './Components/BackgroundFetching'
import Pagination from './Components/Pagination'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <AddUser />
      <CRUDUserList />
      <BackgroundFetching />
      <Pagination />
    </QueryClientProvider>
  )
}

export default App

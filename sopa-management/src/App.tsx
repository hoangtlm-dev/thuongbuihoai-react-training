import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {
  Route,
  Routes
} from 'react-router-dom';
import {
  Suspense,
  lazy
} from 'react';

// Styles
import './styles/main.css';

// Components
import Header from './layouts/Header';
import Loading from './components/common/Loading';
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;

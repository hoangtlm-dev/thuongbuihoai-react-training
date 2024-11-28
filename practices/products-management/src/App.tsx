import { memo } from 'react';
import './App.css';
import './styles/main.css';
import Table from './components/Table';
import { SWRConfig } from 'swr';
import { ProductProvider } from './contexts/ProductContext';

const App: React.FC = () => {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <ProductProvider>
        <Table />
      </ProductProvider>
    </SWRConfig>
  );
};

export default memo(App);

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import UserList from '../UserList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
describe('ProductList Component', () => {
  const customRender = (ui: JSX.Element) => {
    return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
  };

  test('renders UserList component', () => {
    // Render the component
    customRender(<UserList />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
})

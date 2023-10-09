import { render, renderHook, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import UserList from '../UserList';
import { QueryClient, QueryClientProvider } from 'react-query';
import { fetchUsers } from '../MutateSideEffect';
import DATA_EXPERT from '../../__mocks__/expert';
// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
import nock from 'nock';
// import axios from 'axios';
import mockAxios from '../../__mocks__/axios';

const queryClient = new QueryClient();
// const mockAxios = new MockAdapter(axios);
describe('ProductList Component', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  const customRender = (ui: JSX.Element) => {
    return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
  };

  test('renders the list of expert', async () => {
    mockAxios.get.mockResolvedValueOnce({data: DATA_EXPERT});
    const { result } = renderHook(() => fetchUsers());
    console.log('result', result);

    await waitFor(() => (result.current as any).isSuccess);

    expect((result.current as any).data).toEqual(DATA_EXPERT);
  });

  test('renders UserList component', () => {
    // Render the component
    customRender(<UserList />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
})

import { renderHook, waitFor } from '@testing-library/react';
import { fetchData } from '../useQuery';
import { QueryClient, QueryClientProvider } from 'react-query';
import DATA_EXPERT from '../../__mocks__/expert';
import mockAxios from '../../__mocks__/axios';

const queryClient = new QueryClient();
describe('ProductList Component', () => {
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  test('renders the list of expert', async () => {
    mockAxios.get.mockResolvedValue({ data: DATA_EXPERT });
    const { result } = renderHook(() => fetchData(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toEqual(true);
      expect(result.current.data).toEqual(DATA_EXPERT);
    });
  });
})

import {
  renderHook,
  waitFor
} from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

// Mocks
import { MOCK_PRODUCTS } from '@mocks/product';
import { MOCK_ACCOUNT } from '@mocks/account';

// Hooks
import {
  useFetchProductDetail,
  useFetchUser,
  useInfiniteProducts
} from '../useQuery';

// Service
import { api } from '@services/APIRequest';

const queryClient = new QueryClient();
describe('Test useInfiniteProducts', () => {
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('Should return data when call useFetchProductDetail success', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_PRODUCTS[0]);
    const { result } = renderHook(() => useFetchProductDetail('1'), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(MOCK_PRODUCTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  test('Should return data and isSuccess is true when call useInfiniteProducts success', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_PRODUCTS);
    const { result } = renderHook(() => useInfiniteProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toEqual(true);
      expect(result.current.data[0]).toEqual(MOCK_PRODUCTS);
    });
  });

  test('renders the list of user', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(MOCK_ACCOUNT);
    const { result } = renderHook(() => useFetchUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toEqual(true);
      expect(result.current.data).toEqual(MOCK_ACCOUNT);
    });
  });
});

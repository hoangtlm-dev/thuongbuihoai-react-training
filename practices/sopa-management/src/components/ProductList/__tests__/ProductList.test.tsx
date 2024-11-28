// Libs
import '@testing-library/jest-dom';
import {
  waitFor,
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import ProductList from '@components/ProductList';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

const fetchNextPage = jest.fn();
jest.mock('@hooks/useQuery', () => ({
  useInfiniteProducts: () => ({
    fetchNextPage,
    hasNextPage: true,
    isLoading: false,
    isFetchingNextPage: false,
  }),
}));

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductList />);
    expect(getByTestId('product')).toBeInTheDocument();
  });

  test('renders loading state initially', async () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductList />);

    expect(getByTestId('product')).toBeInTheDocument();
    await waitFor(() => screen.getByTestId('product-list'));
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(getByTestId('product-list')).toBeInTheDocument();
  });

  test('calls fetchNextPage on button click', async () => {
    renderWithRouterAndQuery(<ProductList />);

    const showMoreButton =  screen.getByText('Show More');
    await userEvent.click(showMoreButton);

    await waitFor(() => expect(fetchNextPage).toHaveBeenCalled());
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<ProductList />);
    expect(container).toMatchSnapshot();
  });
});

// Libs
import '@testing-library/jest-dom';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

// Components
import CartModal from '@components/CartModal';
import { MOCK_PRODUCTS } from '@mocks/product';

// Stores
import { useCartStore } from '@stores/cart';

describe('Modal component', () => {
  beforeEach(() => {
    useCartStore.setState({
      cart: MOCK_PRODUCTS,
    });
  });

  test('Should render Modal component by default', () => {
    const { getByTestId } = renderWithRouterAndQuery(<CartModal carts={MOCK_PRODUCTS} />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
  });

  test('should render CartModal with cart items when carts is true', () => {
    const { getByTestId, getByText } = renderWithRouterAndQuery(<CartModal carts={MOCK_PRODUCTS} />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
    expect(getByText('Cart')).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<CartModal carts={MOCK_PRODUCTS} />);
    expect(container).toMatchSnapshot();
  });
});

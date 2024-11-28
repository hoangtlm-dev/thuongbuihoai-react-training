// Libs
import '@testing-library/jest-dom';

// Components
import CartItem from '../CartItem';

// Mocks
import { MOCK_PRODUCT } from '@mocks/product';
import { renderWithRouterAndQuery } from '@helpers/testUtils';

describe('CartItem component', () => {
  const props = {
    key: '1',
    cartItem: MOCK_PRODUCT,
  };
  test('should render CartItem component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<CartItem {...props} />);
    expect(getByTestId('cart-item')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = renderWithRouterAndQuery(<CartItem {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

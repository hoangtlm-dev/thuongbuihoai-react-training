// Libs
import '@testing-library/jest-dom';

// Components
import ProductCard from '../ProductCard';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

// Mocks
import { MOCK_PRODUCTS } from '@mocks/product';

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = renderRouterTest(
      <ProductCard data={MOCK_PRODUCTS} />
    );
    expect(getByTestId('product-card')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(
      <ProductCard data={MOCK_PRODUCTS} />
    );
    expect(container).toMatchSnapshot();
  });
});

// Libs
import '@testing-library/jest-dom';

// Mocks
import { MOCK_PRODUCT } from '@mocks/product';

// Components
import Card from '@components/Card';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

describe('Card component', () => {
  test('should render Card component', () => {
    const { getByTestId } = renderRouterTest(
      <Card
        href='/'
        src={MOCK_PRODUCT.image?.url}
        name={MOCK_PRODUCT.name}
        color={MOCK_PRODUCT.color}
        price={MOCK_PRODUCT.price}
      />
    );
    expect(getByTestId('card')).toBeInTheDocument();
  });

  test('should render Card component by default', () => {
    const { getByTestId } = renderRouterTest(
      <Card href='/' src={MOCK_PRODUCT.image?.url} />
    );
    expect(getByTestId('card')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(
      <Card
        href='/'
        src={MOCK_PRODUCT.image?.url}
        name={MOCK_PRODUCT.name}
        color={MOCK_PRODUCT.color}
        price={MOCK_PRODUCT.price}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

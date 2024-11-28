// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Price,
{
  PriceType
} from '@common/Price';

describe('Price component', () => {
  test('should render price component with type is default', () => {
    const { getByTestId } = render(
      <Price value={145} type={PriceType.default} />
    );
    expect(getByTestId('price')).toBeInTheDocument();
  });

  test('should render price component with type is primary', () => {
    const { getByTestId } = render(
      <Price value={145} type={PriceType.primary} />
    );
    expect(getByTestId('price')).toBeInTheDocument();
  });

  test('should render price component with type is secondary', () => {
    const { getByTestId } = render(
      <Price value={145} type={PriceType.secondary} />
    );
    expect(getByTestId('price')).toBeInTheDocument();
  });

  test('should render price component with type is tertiary', () => {
    const { getByTestId } = render(
      <Price value={145} type={PriceType.tertiary} />
    );
    expect(getByTestId('price')).toBeInTheDocument();
  });

  test('should render price component with type is default props', () => {
    const { getByTestId } = render(<Price />);
    expect(getByTestId('price')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Price value={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

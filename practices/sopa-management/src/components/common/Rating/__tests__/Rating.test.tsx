// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Rating from '@common/Rating';

describe('Rating component', () => {
  test('should render Rating component with type is default', () => {
    const { getByTestId } = render(<Rating />);
    expect(getByTestId('rating')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Rating />);
    expect(container).toMatchSnapshot();
  });
});

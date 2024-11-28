// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import Carousel from '@common/Carousel';

describe('Carousel component', () => {
  test('should render Carousel component', () => {
    const { getByTestId } = render(<Carousel />);
    expect(getByTestId('carousel')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });
});

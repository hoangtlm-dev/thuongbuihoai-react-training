// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import RatingStar from '../RatingStar';

describe('RatingStar component', () => {
  test('should render RatingStar component with type is default', () => {
    const { getByTestId } = render(<RatingStar />);
    expect(getByTestId('rating-star')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<RatingStar />);
    expect(container).toMatchSnapshot();
  });
});

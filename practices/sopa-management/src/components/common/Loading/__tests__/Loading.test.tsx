import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Loading
import Loading from '@common/Loading';

describe('Loading component', () => {
  test('should render loading component', () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId('loading-page')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});

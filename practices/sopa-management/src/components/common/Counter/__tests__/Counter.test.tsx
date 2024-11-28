// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import Counter from '@common/Counter';

describe('Counter component', () => {
  const props = {
    value: 2,
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  test('should render Counter component', () => {
    const { getByTestId } = render(<Counter {...props} />);
    expect(getByTestId('counter')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Counter {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

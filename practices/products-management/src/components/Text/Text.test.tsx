import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '.';

describe('Text component', () => {
  test('Should render Text component with size is normal', () => {
    const { getByTestId } = render(<Text text='Management' size='normal' />);
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Should render Text component with size is large', () => {
    const { getByTestId } = render(<Text text='Management' size='large' />);
    const text = getByTestId('text');
    expect(text).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Text text='Management' size='normal' />);
    expect(container).toMatchSnapshot();
  });
});

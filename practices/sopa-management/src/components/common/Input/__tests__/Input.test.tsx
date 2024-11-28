import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Input from '@common/Input';

describe('Input component', () => {
  test('Should render Input component', () => {
    const { getByTestId } = render(
      <Input type='text' />
    );
    const inputValue = getByTestId('input');
    expect(inputValue).toBeInTheDocument();
  });

  test('Should render Input component by default', () => {
    const { getByTestId } = render(<Input />);
    const inputValue = getByTestId('input');
    expect(inputValue).toBeInTheDocument();
  });

  test('Should render Input component with label', () => {
    const { getByTestId } = render(<Input label='Products' />);
    const inputValue = getByTestId('input-value');
    expect(inputValue).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Input type='text' />
    );
    expect(container).toMatchSnapshot();
  });
});

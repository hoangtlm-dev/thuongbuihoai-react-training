import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '.';

describe('Dropdown component', () => {
  test('Should render Dropdown component with size is normal', () => {
    const { getByTestId } = render(<Dropdown />);
    const dropdown = getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Dropdown />);
    expect(container).toMatchSnapshot();
  });
});

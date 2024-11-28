import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon, { IconType } from '../index';

describe('Icon component', () => {
  test('Should render Icon component with bag', () => {
    const { getByTestId } = render(<Icon iconName={IconType.bag} />);
    const icon = getByTestId('icon');
    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
  });

  test('Should render Icon component with default', () => {
    const { getByTestId } = render(<Icon />);
    const icon = getByTestId('icon');
    fireEvent.click(icon);
    expect(icon).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Icon iconName={IconType.bag} />);
    expect(container).toMatchSnapshot();
  });
});

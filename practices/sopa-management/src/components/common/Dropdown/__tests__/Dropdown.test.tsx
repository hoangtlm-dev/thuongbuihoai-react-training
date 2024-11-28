// Libs
import '@testing-library/jest-dom';
import {
  render,
  screen
} from '@testing-library/react';

// Components
import Dropdown from '@common/Dropdown';

// Constants
import { SIZE } from '@constants/common';
import { renderRouterTest } from '@helpers/testUtils';
import userEvent from '@testing-library/user-event';

describe('Dropdown component', () => {
  test('should render Dropdown component', () => {
    const { getByTestId } = render(<Dropdown data={SIZE} />);
    expect(getByTestId('dropdown')).toBeInTheDocument();
  });

  test('should render Dropdown component with default props', () => {
    const { getByTestId } = render(<Dropdown />);
    expect(getByTestId('dropdown')).toBeInTheDocument();
  });

  test('should render correctly when the dropdown is open', async () => {
    const { getByTestId } = render(<Dropdown data={SIZE} />);

    const dropdown = getByTestId('dropdown');
    await userEvent.click(dropdown);

    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  test('should render correctly when the dropdown is open with logout', async () => {
    const { getByTestId } = renderRouterTest(<Dropdown isHref data={SIZE} />);

    const dropdown = getByTestId('dropdown');
    await userEvent.click(dropdown);

    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('should call onSetValue with the correct value when an item is clicked', async () => {
    const mockOnSetValue = jest.fn();
    const { getByTestId } = render(<Dropdown data={SIZE} onSetValue={mockOnSetValue} />);

    const dropdown = getByTestId('dropdown');
    await userEvent.click(dropdown);

    const option1 = screen.getByText('Small');
    await userEvent.click(option1);

    expect(mockOnSetValue).toHaveBeenCalledWith('Small');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Dropdown data={SIZE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

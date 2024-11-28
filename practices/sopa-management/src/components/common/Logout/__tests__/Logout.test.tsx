// Libs
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import Logout from '@common/Logout';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

describe('Logout component', () => {
  test('should render Logout component', () => {
    const { getByTestId } = renderRouterTest(<Logout />);
    expect(getByTestId('logout')).toBeInTheDocument();
  });

  test('Should render Logout component with action onToggle', async () => {
    const { getByTestId } = renderRouterTest(<Logout />);

    const actionButton = getByTestId('button');
    await userEvent.click(actionButton);

    const logoutButton = getByTestId('dropdown');
    await userEvent.click(logoutButton);

    await waitFor(() => expect(logoutButton).toBeInTheDocument());
  });

  test('matches snapshot', () => {
    const { asFragment } = renderRouterTest(<Logout />);
    expect(asFragment()).toMatchSnapshot();
  });
});

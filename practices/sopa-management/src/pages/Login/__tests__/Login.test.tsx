// Libs
import '@testing-library/jest-dom';

// Components
import Login from '..';

// Helpers
import { renderWithRouterAndQuery } from '../../../helpers/testUtils';
import {
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react';
import { MOCK_ACCOUNTS } from '@mocks/account';
import {
  checkAccount
} from '@helpers/login';

// Interfaces
import { CheckType } from '@interfaces/account';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('@helpers/login', () => ({
  ...jest.requireActual('@helpers/login'),
  checkAccount: jest.fn(),
}));

describe('Login component', () => {
  test('should render Login component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Login />);
    expect(getByTestId('login')).toBeInTheDocument();
  });

  test('should not display error when value is valid', async () => {
    const mockNavigate = jest.fn();
    (checkAccount as jest.Mock).mockReturnValue({
      data: MOCK_ACCOUNTS,
      email: 'example@gmail.com',
      password: '123456',
      checkType: CheckType
    });

    jest
      .spyOn(require('react-router-dom'), 'useNavigate')
      .mockReturnValue(mockNavigate);

    renderWithRouterAndQuery(<Login />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'example@gmail.com'
      }
    });

    fireEvent.input(screen.getByLabelText ('Password', {selector: 'input'}), {
      target: {
        value: '123456'
      }
    });

    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
      'example@gmail.com'
    );
    expect(screen.getByLabelText ('Password', {selector: 'input'})).toHaveValue(
      '123456'
    );
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
  });

  test('should display error when value is invalid', async () => {
    const mockNavigate = jest.fn();
    (checkAccount as jest.Mock).mockReturnValue(false);

    jest
      .spyOn(require('react-router-dom'), 'useNavigate')
      .mockReturnValue(mockNavigate);

    renderWithRouterAndQuery(<Login />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'examples@gmail.com'
      }
    });

    fireEvent.input(screen.getByLabelText ('Password', {selector: 'input'}), {
      target: {
        value: '1234567'
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(mockNavigate).not.toHaveBeenCalledWith('/'));
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<Login />);
    expect(container).toMatchSnapshot();
  });
});

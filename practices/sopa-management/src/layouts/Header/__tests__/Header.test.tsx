// Libs
import '@testing-library/jest-dom';

// Components
import Header from '@layouts/Header';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

describe('Header component', () => {
  test('should render Header component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<Header />);
    expect(container).toMatchSnapshot();
  });
});

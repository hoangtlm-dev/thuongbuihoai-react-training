// Libs
import '@testing-library/jest-dom';

// Components
import Footer from '@layouts/Footer';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

describe('Footer component', () => {
  test('should render Footer component', () => {
    const { getByTestId } = renderRouterTest(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

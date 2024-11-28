// Libs
import '@testing-library/jest-dom';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

// Components
import Social from '@common/Social';

describe('Social component', () => {
  test('should render Social component', () => {
    const { getByTestId } = renderRouterTest(<Social />);
    expect(getByTestId('social')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = renderRouterTest(<Social />);
    expect(asFragment()).toMatchSnapshot();
  });
});

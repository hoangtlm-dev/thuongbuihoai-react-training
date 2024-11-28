// Libs
import '@testing-library/jest-dom';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

// Components
import Menu from '@common/Menu';

// Constants
import { MENU_HEADER } from '@constants/common';

describe('Menu component', () => {
  test('Should render Menu component by default', () => {
    const { getByTestId } = renderRouterTest(<Menu menuList={MENU_HEADER} />);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('Should render Menu component by value', () => {
    const { getByTestId } = renderRouterTest(
      <Menu menuList={MENU_HEADER} value='Products' />
    );
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = renderRouterTest(<Menu menuList={MENU_HEADER} />);
    expect(container).toMatchSnapshot();
  });
});

// Libs
import '@testing-library/jest-dom';

// Constants
import { IMAGE } from '@constants/image';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

// Components
import Image from '@common/Image';

describe('Image component', () => {
  test('should render Image component', () => {
    const { getByTestId } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' width={30} height={30} />
    );
    expect(getByTestId('image-link')).toBeInTheDocument();
  });

  test('should render Image component default url', () => {
    const { getByTestId } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' width={30} height={30} />
    );
    expect(getByTestId('image-link')).toBeInTheDocument();
  });

  test('should render Image component default', () => {
    const { getByTestId } = renderRouterTest(
      <Image width={30} height={30} />
    );
    expect(getByTestId('image')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' width={30} height={30} />
    );
    expect(container).toMatchSnapshot();
  });
});

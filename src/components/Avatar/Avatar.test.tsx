import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar, { AvatarType } from '.';
import { ASSETS } from '../../constants/assets';

describe('Avatar component', () => {
  test('Should render Avatar component with type primary ', () => {
    const { getByTestId } = render(
      <Avatar
        alt='This is image brand IBM'
        src={ASSETS.arleneWilson}
        type={AvatarType.primary}
      />
    );
    const avatar = getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Avatar
        alt='This is image brand IBM'
        src={ASSETS.arleneWilson}
        type={AvatarType.primary}
      />
    );
    expect(container).toMatchSnapshot();
  });
});

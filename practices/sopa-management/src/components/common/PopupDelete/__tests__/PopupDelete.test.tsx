// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import PopupDelete from '@common/PopupDelete';

// Constants
import { CONFIRM_MESSAGE } from '@constants/validate';

describe('PopupDelete component', () => {
  const props = {
    onCancel: jest.fn(),
    onDelete: jest.fn()
  };
  test('should render PopupDelete component', () => {
    const { getByTestId } = render(<PopupDelete {...props} />);
    expect(getByTestId('popup-delete')).toBeInTheDocument();
  });

  test('should render PopupDelete component', () => {
    const { getByTestId } = render(<PopupDelete title={CONFIRM_MESSAGE.CONFIRM_DELETE} {...props} />);
    expect(getByTestId('popup-delete')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<PopupDelete {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

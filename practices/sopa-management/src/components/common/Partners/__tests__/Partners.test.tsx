// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Partners from '@common/Partners';

describe('Partners component', () => {
  test('should render Partners component with type is default', () => {
    const { getByTestId } = render(<Partners />);
    expect(getByTestId('partners')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<Partners />);
    expect(container).toMatchSnapshot();
  });
});

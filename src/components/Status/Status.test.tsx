import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Status, { StatusType } from '.';

describe('Status component', () => {
  test('Should render Status component with size is normal', () => {
    const { getByTestId } = render(
      <Status value='Available' type={StatusType.primary} />
    );
    const status = getByTestId('status');
    expect(status).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Status />);
    expect(container).toMatchSnapshot();
  });
});

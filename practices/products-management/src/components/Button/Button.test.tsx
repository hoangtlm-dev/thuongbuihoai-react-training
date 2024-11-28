import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonType } from './index';

describe('Button component', () => {
  test("Should render Button component with type 'default'", async () => {
    render(<Button text='' type={ButtonType.default} onClick={() => {}} />);
    const clickBtn = screen.getByRole('button');
    expect(clickBtn).toBeInTheDocument();
  });

  test('Should render Button component with Children', async () => {
    render(<Button type={ButtonType.default}>Submit</Button>);
    const clickBtn = screen.getByRole('button');
    expect(clickBtn).toBeInTheDocument();
  });

  test('Should render Button component with action onClick', async () => {
    const onClickButton = jest.fn();
    render(
      <Button
        text='Delete'
        onClick={onClickButton}
        type={ButtonType.secondary}
      />
    );

    const clickBtn = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Button text='READ MORE' />);
    expect(container).toMatchSnapshot();
  });
});

// Libs
import {
  render,
  screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Components
import Button, { ButtonType } from '@common/Button';
import Icon, { IconType } from '@components/common/Icon';

describe('Button component', () => {
  test("Should render Button component with type 'default'", async () => {
    const { getByTestId } = render(<Button type={ButtonType.default} />);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  test("Should render Button component with type 'disable'", async () => {
    render(<Button disable type={ButtonType.default} />);
    const clickBtn = screen.getByRole('button');
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'primary'", async () => {
    render(<Button children='SHOW MORE' type={ButtonType.primary} />);

    const primaryBtn = screen.getByRole('button', { name: /SHOW MORE/i });
    expect(primaryBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'secondary'", async () => {
    render(<Button children='Add to bag' type={ButtonType.secondary} />);

    const secondaryBtn = screen.getByRole('button', { name: /Add to bag/i });
    expect(secondaryBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'tertiary'", async () => {
    render(<Button children='Add to bag' type={ButtonType.tertiary} />);

    const tertiaryBtn = screen.getByRole('button', { name: /Add to bag/i });
    expect(tertiaryBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'btnIconPrimary'", async () => {
    render(
      <Button
        children={<Icon iconName={IconType.trash} />}
        type={ButtonType.btnIconPrimary}
      />
    );

    const btnIconPrimary = screen.getByRole('button');
    expect(btnIconPrimary).toBeInTheDocument();
  });

  test("Should render Button component with type 'btnIconSecondary'", async () => {
    render(
      <Button
        children={<Icon iconName={IconType.trash} />}
        type={ButtonType.btnIconSecondary}
      />
    );

    const btnIconSecondary = screen.getByRole('button');
    expect(btnIconSecondary).toBeInTheDocument();
  });

  test('Should render Button component with default value', async () => {
    render(<Button />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Should render Button component with action onClick', async () => {
    const onClickButton = jest.fn();
    render(<Button onClick={onClickButton} type={ButtonType.secondary} />);

    const actionButton = screen.getByRole('button');
    await userEvent.click(actionButton);
    expect(onClickButton).toHaveBeenCalled();
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Button children='SHOW MORE' type={ButtonType.default} />
    );
    expect(container).toMatchSnapshot();
  });
});

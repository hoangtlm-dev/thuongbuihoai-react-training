import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonType } from "../index";

describe("Button component", () => {
  const onClickButton = jest.fn();
  test("Should render Button component with type 'default'", async () => {
    render(
      <Button icon text="" onClick={onClickButton} type={ButtonType.default} />,
    );

    const clickBtn = screen.getByRole("button");
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render Button component with type 'primary'", async () => {
    render(
      <Button
        text="READ MORE"
        onClick={onClickButton}
        type={ButtonType.primary}
      />,
    );

    const clickBtn = screen.getByRole("button", { name: /READ MORE/i });
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render Button component with type 'secondary'", async () => {
    render(
      <Button
        text="SUBSCRIBE"
        onClick={onClickButton}
        type={ButtonType.secondary}
      />,
    );

    const clickBtn = screen.getByRole("button", { name: /SUBSCRIBE/i });
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Button
        text="READ MORE"
        onClick={onClickButton}
        type={ButtonType.default}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

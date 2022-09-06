import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonType } from "../index";

describe("Button component", () => {
  test("Should render Button component with type 'default'", async () => {
    render(<Button icon text="" type={ButtonType.default} />);
    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'disable'", async () => {
    render(<Button icon disable text="" type={ButtonType.default} />);
    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'primary'", async () => {
    render(<Button text="READ MORE" type={ButtonType.primary} />);

    const clickBtn = screen.getByRole("button", { name: /READ MORE/i });
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'secondary'", async () => {
    render(<Button text="SUBSCRIBE" type={ButtonType.secondary} />);

    const clickBtn = screen.getByRole("button", { name: /SUBSCRIBE/i });
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with default value of onClick", async () => {
    render(<Button text="READ MORE" type={ButtonType.primary} />);

    const clickBtn = screen.getByRole("button", { name: /READ MORE/i });
    fireEvent.click(clickBtn);
  });

  test("Should render Button component with action onClick", async () => {
    const onClickButton = jest.fn();
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
      <Button text="READ MORE" type={ButtonType.default} />,
    );
    expect(container).toMatchSnapshot();
  });
});

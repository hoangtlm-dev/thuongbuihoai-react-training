import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  const onClickButton = jest.fn();
  test("Should render prop when clicking button", async () => {
    render (
      <Button onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button text="Sign Up" onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
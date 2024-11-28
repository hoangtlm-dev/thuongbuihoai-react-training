import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  const onClickButton = jest.fn();
  test("Should render prop when clicking button", async () => {
    render (
      <Button onClick={onClickButton} text="Submit" />
    );
    const clickBtn = screen.getByRole("button", {name: /Submit/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button text="" onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
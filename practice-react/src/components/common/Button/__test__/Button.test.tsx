import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  const onClickButton = jest.fn();
  test("Should render component Button", async () => {
    render (
      <Button onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'primary' ", async () => {
    render (
      <Button type="primary" onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'light' ", async () => {
    render (
      <Button type="light" onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'dark' ", async () => {
    render (
      <Button type="dark" onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'large' ", async () => {
    render (
      <Button type="large" onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'outline-light' ", async () => {
    render (
      <Button type="outline-light" onClick={onClickButton} text="Sign Up" />
    );
    const clickBtn = screen.getByRole("button", {name: /Sign Up/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Should render component Button type 'outline-dark' ", async () => {
    render (
      <Button type="outline-dark" onClick={onClickButton} text="Sign Up" />
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
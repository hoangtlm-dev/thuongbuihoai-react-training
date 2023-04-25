import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Input from ".";

describe("Input component", () => {
  test("Should render Input component", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search" />,
    );
    const inputValue = getByTestId("input-value");
    expect(inputValue).toBeInTheDocument();
  });

  test("Should render Input component with onClick", () => {
    const onClickInput = jest.fn();
    const { getByTestId } = render(
      <Input
        type="text"
        onClick={onClickInput}
        placeholder="Search"
      />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
    expect(onClickInput).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onClick", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search" />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
  });

  test("Should render Input component with onBlur", () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input type="text" onBlur={onBlur} placeholder="Search" />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
    expect(onBlur).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onBlur", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search" />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Input type="text" placeholder="Search" />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../index";

describe("Input component", () => {
  test("Should render Input component", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search the side..." />,
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
        placeholder="Search the side..."
      />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
    expect(onClickInput).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onClick", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search the side..." />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
  });

  test("Should render Input component with onBlur", () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <Input type="text" onBlur={onBlur} placeholder="Search the side..." />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
    expect(onBlur).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onBlur", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Search the side..." />,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
  });

  test("Display blog after inputSearch", async () => {
    render(<Input type="text" placeholder="Search the side..." />);
    const inputElement = screen.getByPlaceholderText(
      /Search the side.../i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "How Do You Measure Up?" },
    });
    expect(inputElement.value).toBe("How Do You Measure Up?");
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Input type="text" placeholder="Your email..." />,
    );
    expect(container).toMatchSnapshot();
  });
});

import { fireEvent, render } from "@testing-library/react";
import Text from "../index";

describe("Text component", () => {
  const onClickText = jest.fn();
  test("Should render Text component with size is normal", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="normal" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is regular", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="regular" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is regularDark", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="regularDark" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is regularOutline", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="regularOutline" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is medium", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="medium" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is mediumOutline", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="mediumOutline" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is large", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="large" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is largeDark", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="largeDark" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component when click", async () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" onClick={onClickText} size="largeDark" />,
    );
    const clickText = getByTestId("text");
    fireEvent.click(clickText);
    expect(onClickText).toHaveBeenCalled();
  });

  test("Should render Text component with default value of onClick", async () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="largeDark" />,
    );
    const clickText = getByTestId("text");
    fireEvent.click(clickText);
    expect(onClickText).toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Text text="Dealer Marketing" onClick={onClickText} size="normal" />,
    );
    expect(container).toMatchSnapshot();
  });
});

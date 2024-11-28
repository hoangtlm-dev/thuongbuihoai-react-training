import { render } from "@testing-library/react";
import Text from "../index";

describe("Text component", () => {
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

  test("Should render Text component with size is primary", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="primary" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Should render Text component with size is secondary", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="secondary" />,
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

  test("Should render Text component with size is light", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="light" />,
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

  test("Should render Text component with size is dark", () => {
    const { getByTestId } = render(
      <Text text="Dealer Marketing" size="dark" />,
    );
    const text = getByTestId("text");
    expect(text).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Text text="Dealer Marketing" size="normal" />,
    );
    expect(container).toMatchSnapshot();
  });
});

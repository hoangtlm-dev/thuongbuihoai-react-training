import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("Price component", () => {
  test("should render price component", () => {
    const { getByTestId } = render(<Text text="This is new product" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Text text="This is new product" />);
    expect(asFragment()).toMatchSnapshot();
  });
})
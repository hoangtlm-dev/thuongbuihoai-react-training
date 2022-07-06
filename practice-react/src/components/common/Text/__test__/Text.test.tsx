import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("Text component", () => {
  test("should render text component", () => {
    const { getByTestId } = render(<Text text="Offers" />);
    expect(getByTestId("text")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Text text="Offers" />);
    expect(asFragment()).toMatchSnapshot();
  });
})
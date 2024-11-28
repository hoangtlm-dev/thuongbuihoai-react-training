import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Price from "../Price";

describe("Price component", () => {
  test("should render component Price type 'discount' ", () => {
    const { getByTestId } = render(<Price value={0} type="discount" />);
    expect(getByTestId("price")).toBeInTheDocument();
  });

  test("should render component Price type 'original' ", () => {
    const { getByTestId } = render(<Price value={0} type="original" />);
    expect(getByTestId("price")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Price value={0} type="discount" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

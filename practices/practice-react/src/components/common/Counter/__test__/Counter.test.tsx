import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../Counter";

describe("Counter component", () => {
  test("should render Counter component", () => {
    const { getByTestId } = render(<Counter counter={0} />);
    expect(getByTestId("counter")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Counter counter={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

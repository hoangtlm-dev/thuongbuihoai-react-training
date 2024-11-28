import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "../Title";

describe("Title component", () => {
  test("should render h2 tag", () => {
    const { getByTestId } = render(<Title text="Cheese pocket" />);
    expect(getByTestId("title-test")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Title text="Cheese pocket" />);
    expect(asFragment()).toMatchSnapshot();
  });
})
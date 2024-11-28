import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "../Navigation";

describe("Navigation component", () => {
  test("should render navigation component", () => {
    const { getByTestId } = render(<Navigation />);
    expect(getByTestId("navigation")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Navigation />);
    expect(asFragment()).toMatchSnapshot();
  });
})
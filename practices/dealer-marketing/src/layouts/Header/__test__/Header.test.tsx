import { render } from "@testing-library/react";
import Header from "../index";

describe("Header component", () => {
  test("Should render Header component", () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});

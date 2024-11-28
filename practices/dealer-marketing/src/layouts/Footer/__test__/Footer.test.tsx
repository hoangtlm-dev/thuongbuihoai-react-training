import { render } from "@testing-library/react";
import Footer from "../index";

describe("Footer component", () => {
  test("Should render Footer component", () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

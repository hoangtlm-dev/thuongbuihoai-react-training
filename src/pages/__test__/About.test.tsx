import { render, screen } from "@testing-library/react";
import About from "../../../pages/about";

describe("About page", () => {
  test("renders a heading", () => {
    render(<About />);
    const heading = screen.getByText(/About page/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders homepage unchanged", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});

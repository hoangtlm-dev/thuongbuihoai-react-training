import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button page", () => {
  test("renders a heading", () => {
    render(<Button />);
    const heading = screen.getByText(/Button/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders homepage unchanged", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});

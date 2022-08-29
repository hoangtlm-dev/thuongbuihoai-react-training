import { BLOG_MOCKING } from "@constants/blog";
import { render, screen } from "@testing-library/react";
import CardBlog from "../index";

describe("CardBog component", () => {
  test("Should render CardBog component", () => {
    render(<CardBlog blog={BLOG_MOCKING} />);
    const cardBog = screen.getByText(/RESEARCH & ANALYSIS/i);
    expect(cardBog).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<CardBlog blog={BLOG_MOCKING} />);
    expect(container).toMatchSnapshot();
  });
});

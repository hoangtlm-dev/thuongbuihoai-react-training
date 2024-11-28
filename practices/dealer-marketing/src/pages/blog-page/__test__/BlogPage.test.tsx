import { render } from "@testing-library/react";
import BlogPage from "../index";

describe("BlogPage", () => {
  test("Should render BlogPage", () => {
    const { getByTestId } = render(<BlogPage />);
    const blogPage = getByTestId("layout");
    expect(blogPage).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<BlogPage />);
    expect(container).toMatchSnapshot();
  });
});

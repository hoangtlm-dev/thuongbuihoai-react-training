import { BLOG_MOCKING_LIST } from "@constants/blog";
import { render } from "@testing-library/react";
import BlogList from "../index";

jest.mock("@context/BlogContext");
const BlogContext = require("@context/BlogContext");

BlogContext.BlogProvider.mockImplementation(() => {
  return { blogs: BLOG_MOCKING_LIST, errorCode: "success" };
});

describe("BlogList component", () => {
  test("Should render BlogList component", () => {
    const { getByTestId } = render(<BlogList />);
    const blogList = getByTestId("blog-list");
    expect(blogList).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<BlogList />);
    expect(container).toMatchSnapshot();
  });
});

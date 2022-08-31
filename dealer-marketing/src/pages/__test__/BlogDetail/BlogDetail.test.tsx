import { BLOG_MOCKING, BLOG_MOCKING_LIST } from "@constants/blog";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import BlogDetail from "@pages/[slug]";

jest.mock("@context/BlogContext");
const BlogContext = require("@context/BlogContext");

BlogContext.BlogProvider.mockImplementation(() => {
  return { blogs: BLOG_MOCKING_LIST, errorCode: "success" };
});

describe("BlogDetail page", () => {
  test("Should render BlogDetail page", () => {
    const { getByTestId } = render(<BlogDetail blog={BLOG_MOCKING} />);
    const blogDetail = getByTestId("layout");
    expect(blogDetail).toBeInTheDocument();
  });

  test("renders the features with getStaticProps", () => {
    const tree = renderer.create(<BlogDetail blog={BLOG_MOCKING} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Matches snapshot", () => {
    const { container } = render(<BlogDetail blog={BLOG_MOCKING} />);
    expect(container).toMatchSnapshot();
  });
});

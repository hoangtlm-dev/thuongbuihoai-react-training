import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import BlogList from "../index";

const contextBlogMocking: BlogContextProps = {
  searchValue: "",
  setSearchValue: jest.fn(),
  blogs: BLOG_MOCKING_LIST,
  blogList: BLOG_MOCKING_LIST,
  errorCode: 0,
  setBlogs: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateBlogs: jest.fn(),
};

describe("BlogList component", () => {
  test("Should render BlogList component", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <BlogList />
      </BlogContext.Provider>,
    );
    const blogList = getByTestId("blog-list");
    expect(blogList).toBeInTheDocument();
  });

  test("Should render BlogList component with error data", () => {
    const { getByTestId } = render(<BlogList />);
    const blogList = getByTestId("blog-list");
    expect(blogList).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <BlogList />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

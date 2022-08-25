import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING, BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import BlogDetail from "@pages/[slug]";

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

describe("BlogDetail page", () => {
  test("Should render BlogDetail page", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <BlogDetail blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    const blogDetail = getByTestId("layout");
    expect(blogDetail).toBeInTheDocument();
  });

  test("renders the features with getStaticProps", () => {
    const tree = renderer
      .create(
        <BlogContext.Provider value={contextBlogMocking}>
          <BlogDetail blog={BLOG_MOCKING} />
        </BlogContext.Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <BlogDetail blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

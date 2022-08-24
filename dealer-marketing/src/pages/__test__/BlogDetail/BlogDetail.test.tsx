import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING, BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
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

  // it('populates the "alert" prop on getContent failure.', async () => {
  //   // Inject anything you want to test
  //   const props = await BlogDetail.getInitialProps({
  //     query: { first: "whatever" },
  //   });

  //   // And make sure it results in what you want.
  //   expect(props).toEqual({
  //     content: BLOG_MOCKING_LIST,
  //     alert: "There was an error loading data, please try again.",
  //   });
  // });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <BlogDetail blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

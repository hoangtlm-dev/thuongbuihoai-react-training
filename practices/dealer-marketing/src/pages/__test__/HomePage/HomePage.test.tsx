import { BlogContextProps } from "types/blog";
import { BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import Home from "@pages/index";

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

describe("HomePage", () => {
  test("Should render HomePage", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Home blogs={BLOG_MOCKING_LIST} errorCode={""} />
      </BlogContext.Provider>,
    );
    const homePage = getByTestId("layout");
    expect(homePage).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Home blogs={BLOG_MOCKING_LIST} errorCode={""} />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

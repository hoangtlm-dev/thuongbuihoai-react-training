import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import Navigation from "../index";

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

describe("Navigation component", () => {
  test("Should render Navigation component", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Navigation />
      </BlogContext.Provider>,
    );
    const navigation = getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});

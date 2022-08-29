import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING, BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render, screen } from "@testing-library/react";
import CardBlog from "../index";

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

describe("CardBog component", () => {
  test("Should render CardBog component", () => {
    render(<CardBlog blog={BLOG_MOCKING} />);
    const cardBog = screen.getByText(/RESEARCH & ANALYSIS/i);
    expect(cardBog).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <CardBlog blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

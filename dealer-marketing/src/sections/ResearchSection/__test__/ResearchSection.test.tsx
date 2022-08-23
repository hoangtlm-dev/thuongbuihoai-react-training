import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING, BLOG_MOCKING_LIST } from "@constants/blog";
import { EXPERT_MOCKING } from "@constants/expert";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import ResearchSection from "..";

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

describe("ResearchSection component", () => {
  test("Should render ResearchSection component with layout is center and content is center", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <ResearchSection layout="center" content="center" blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    const researchSection = getByTestId("research-section");
    expect(researchSection).toBeInTheDocument();
  });

  test("Should render ResearchSection component with layout is center and content is center", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <ResearchSection layout="left" content="center" blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    const researchSection = getByTestId("research-section");
    expect(researchSection).toBeInTheDocument();
  });

  test("Should render ResearchSection component with layout is left and content is grid", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <ResearchSection
          imageSmall
          isButton
          expert={EXPERT_MOCKING}
          layout="left"
          content="grid"
          blog={BLOG_MOCKING}
        />
      </BlogContext.Provider>,
    );
    const researchSection = getByTestId("research-section");
    expect(researchSection).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <ResearchSection blog={BLOG_MOCKING} />
      </BlogContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

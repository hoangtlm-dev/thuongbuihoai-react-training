import { ExpertContextProps } from "@self-types/expert";
import { EXPERT_MOCKING_LIST } from "@constants/expert";
import { ExpertContext } from "@context/ExpertContext";
import { BlogContextProps } from "@self-types/blog";
import { BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { render } from "@testing-library/react";
import { NextPage } from "next";
import MyApp from "@pages/_app";

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

const contextExpertMocking: ExpertContextProps = {
  experts: EXPERT_MOCKING_LIST,
  errorCode: 0,
  setExperts: jest.fn(),
  setErrorCode: jest.fn(),
  handleUpdateExperts: jest.fn(),
};

describe("Banner component", () => {
  const pageProps = {};
  const mockComponent: NextPage = () => {
    return null;
  };
  test("renders snapshot of app component", () => {
    const tree = render(
      <ExpertContext.Provider value={contextExpertMocking}>
        <BlogContext.Provider value={contextBlogMocking}>
          <MyApp pageProps={pageProps} Component={mockComponent} />
        </BlogContext.Provider>
      </ExpertContext.Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

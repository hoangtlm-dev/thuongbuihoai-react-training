import { BlogContextProps } from "@common-types/blog";
import { BLOG_MOCKING_LIST } from "@constants/blog";
import { BlogContext } from "@context/BlogContext";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../index";

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

describe("Input component", () => {
  test("Should render Input component", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Your email..." />,
    );
    const inputValue = getByTestId("input-value");
    expect(inputValue).toBeInTheDocument();
  });

  test("Display blog after inputSearch", async () => {
    render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input type="text" placeholder="Search the side..." />
      </BlogContext.Provider>,
    );
    const inputElement = screen.getByPlaceholderText(
      /Search the side.../i,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: "How Do You Measure Up?" },
    });
    expect(inputElement.value).toBe("How Do You Measure Up?");
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Input type="text" placeholder="Your email..." />,
    );
    expect(container).toMatchSnapshot();
  });
});

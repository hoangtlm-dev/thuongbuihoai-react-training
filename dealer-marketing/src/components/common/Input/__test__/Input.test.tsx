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
  const onClickInput = jest.fn();
  const onBlur = jest.fn();
  test("Should render Input component", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input type="text" placeholder="Search the side..." />
      </BlogContext.Provider>,
    );
    const inputValue = getByTestId("input-value");
    expect(inputValue).toBeInTheDocument();
  });

  test("Should render Input component with onClick", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input
          type="text"
          onClick={onClickInput}
          placeholder="Search the side..."
        />
      </BlogContext.Provider>,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
    expect(onClickInput).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onClick", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input type="text" placeholder="Search the side..." />
      </BlogContext.Provider>,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.click(inputValue);
    expect(onClickInput).toHaveBeenCalled();
  });

  test("Should render Input component with onBlur", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input type="text" onBlur={onBlur} placeholder="Search the side..." />
      </BlogContext.Provider>,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
    expect(onBlur).toHaveBeenCalled();
  });

  test("Should render Input component with default value of onBlur", () => {
    const { getByTestId } = render(
      <BlogContext.Provider value={contextBlogMocking}>
        <Input type="text" placeholder="Search the side..." />
      </BlogContext.Provider>,
    );
    const inputValue = getByTestId("input-value");
    fireEvent.blur(inputValue);
    expect(onBlur).toHaveBeenCalled();
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

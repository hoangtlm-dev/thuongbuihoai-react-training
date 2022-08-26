import { fireEvent, render } from "@testing-library/react";
import debounce from "@helpers/debounce";
import SearchBox from "../SearchBox";

const openModal = jest.fn();
const searchValue = jest.fn();
const onScroll = jest.fn();
describe("SearchBox component", () => {
  test("Should render SearchBox component", () => {
    const { getByTestId } = render(
      <SearchBox
        openModal={openModal}
        onSearch={searchValue}
        onScroll={onScroll}
      />,
    );
    const searchBox = getByTestId("search-box");
    expect(searchBox).toBeInTheDocument();
  });

  jest.useFakeTimers();
  test("execute just once", () => {
    const debouncedFunc = debounce(searchValue, 500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.runAllTimers();
    const { getByTestId } = render(
      <SearchBox
        openModal={openModal}
        onSearch={searchValue}
        onScroll={onScroll}
      />,
    );
    const searchBox = getByTestId("search-box");
    fireEvent.click(searchBox);
    expect(searchValue).not.toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <SearchBox
        openModal={openModal}
        onSearch={searchValue}
        onScroll={onScroll}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});

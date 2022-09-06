import { fireEvent, render } from "@testing-library/react";
import debounce from "@helpers/debounce";
import SearchBox from "../SearchBox";

describe("SearchBox component", () => {
  test("Should render SearchBox component", () => {
    const openModal = jest.fn();
    const onScroll = jest.fn();
    const { getByTestId } = render(
      <SearchBox openModal={openModal} onScroll={onScroll} />,
    );
    const searchBox = getByTestId("search-box");
    expect(searchBox).toBeInTheDocument();
  });

  jest.useFakeTimers();
  test("execute just once", () => {
    const openModal = jest.fn();
    const searchValue = jest.fn();
    const onScroll = jest.fn();
    const debouncedFunc = debounce(searchValue, 500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.runAllTimers();
    const { getByTestId } = render(
      <SearchBox openModal={openModal} onScroll={onScroll} ref={searchValue} />,
    );
    const searchBox = getByTestId("search-box");
    fireEvent.click(searchBox);
    expect(searchValue).toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const openModal = jest.fn();
    const onScroll = jest.fn();
    const { container } = render(
      <SearchBox openModal={openModal} onScroll={onScroll} />,
    );
    expect(container).toMatchSnapshot();
  });
});

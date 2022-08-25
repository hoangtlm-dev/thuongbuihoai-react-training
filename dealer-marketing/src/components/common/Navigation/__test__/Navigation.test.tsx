import debounce from "@helpers/debounce";
import { fireEvent, render } from "@testing-library/react";
import Navigation from "../index";

describe("Navigation component", () => {
  const spyScrollTo = jest.fn();
  beforeEach(() => {
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
    spyScrollTo.mockClear();
  });

  test("Should render Navigation component", () => {
    const { getByTestId } = render(<Navigation />);
    const navigation = getByTestId("navigation");
    fireEvent.scroll(window, { target: { pageYOffset: 1 } });
    fireEvent.click(navigation);
    expect(navigation).toBeInTheDocument();
  });

  test("should render button when window.pageYOffset = 1", () => {
    const { getByTestId } = render(<Navigation />);
    const clickBtn = getByTestId("icon");
    fireEvent.scroll(window, { target: { pageYOffset: 1 } });
    fireEvent.click(clickBtn);
    expect(clickBtn).toBeInTheDocument();
  });

  jest.useFakeTimers();
  test("execute just once", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500);
    debouncedFunc();
    jest.advanceTimersByTime(500);
    debouncedFunc();
    jest.runAllTimers();
    expect(func).not.toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});

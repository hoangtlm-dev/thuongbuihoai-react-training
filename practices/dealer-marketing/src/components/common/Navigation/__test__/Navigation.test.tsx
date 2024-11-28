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

  test("should render input when window.pageYOffset = 1", () => {
    const { getByTestId } = render(<Navigation />);
    const clickBtn = getByTestId("icon");
    fireEvent.scroll(window, { target: { pageYOffset: 1 } });
    fireEvent.click(clickBtn);
    expect(clickBtn).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});

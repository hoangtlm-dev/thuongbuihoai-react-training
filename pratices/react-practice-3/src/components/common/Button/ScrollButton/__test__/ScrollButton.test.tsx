import { fireEvent, render } from "@testing-library/react";
import ScrollButton from "../ScrollButton";

describe("ScrollButton component", () => {
  const spyScrollTo = jest.fn();
  beforeEach(() => {
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
    spyScrollTo.mockClear();
  });

  test("should render button when window.pageYOffset > 500", () => {
    const { getByTestId } = render(
      <ScrollButton
        children={<i className="fa fa-arrow-alt-circle-up"></i>}
        onClick={spyScrollTo}
      />
    );
    const clickBtn = getByTestId("back-to-top");
    fireEvent.scroll(window, { target: { pageYOffset: 700 } });
    fireEvent.click(clickBtn);
    expect(spyScrollTo).toHaveBeenCalled();
  });

  test("should not render button when window.pageYOffset < 500", () => {
    const { getByTestId } = render(
      <ScrollButton
        children={<i className="fa fa-arrow-alt-circle-up"></i>}
        onClick={spyScrollTo}
      />
    );
    const clickBtn = getByTestId("back-to-top");
    fireEvent.scroll(window, { target: { pageYOffset: 300 } });
    fireEvent.click(clickBtn);
    expect(spyScrollTo).not.toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ScrollButton
        children={<i className="fa fa-arrow-alt-circle-up"></i>}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

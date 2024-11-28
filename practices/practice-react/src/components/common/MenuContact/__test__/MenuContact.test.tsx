import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuContact from "../MenuContact";
import { MENU_SERVICE } from "@constants/menu";

describe("MenuContact component", () => {
  test("should render MenuContact component", () => {
    const { getByTestId } = render(<MenuContact menuList={MENU_SERVICE} />);
    expect(getByTestId("contact")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<MenuContact menuList={MENU_SERVICE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

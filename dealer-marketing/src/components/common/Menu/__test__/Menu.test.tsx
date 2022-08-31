import { ROUTER_LIST } from "@constants/routes";
import { render } from "@testing-library/react";
import Menu from "../index";

describe("Menu component", () => {
  test("Should render Menu component", () => {
    const { getByTestId } = render(<Menu menuList={ROUTER_LIST} />);
    const menu = getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  test("Matches snapshot", () => {
    const { container } = render(<Menu menuList={ROUTER_LIST} />);
    expect(container).toMatchSnapshot();
  });
});

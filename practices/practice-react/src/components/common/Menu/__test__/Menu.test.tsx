import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { MENU_LIST } from "../../../../constants/menu";
import "@testing-library/jest-dom";
import Menu from "../Menu";

describe("Menu component", () => {
  test("should render menu component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Menu menuList={MENU_LIST} />
      </Router>
    );
    expect(getByTestId("menu")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Menu menuList={MENU_LIST} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

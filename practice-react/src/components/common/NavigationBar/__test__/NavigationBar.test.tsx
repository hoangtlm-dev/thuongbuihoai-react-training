import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import NavigationBar from "../NavigationBar";

describe("Navigation component", () => {
  test("should render navigation component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBar />
      </Router>
    );
    expect(getByTestId("navigation-bar")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

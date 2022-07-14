import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import NavigationBar from "../NavigationBar";

describe("Navigation component", () => {
  test("should render component NavigationBar type 'isThemeDark' ", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBar
          mode={{
            light: true,
          }}
        />
      </Router>
    );
    expect(getByTestId("navigation-bar")).toBeInTheDocument();
  });

  test("should render component NavigationBar type 'isThemeLight' ", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBar
          mode={{
            dark: true,
          }}
        />
      </Router>
    );
    expect(getByTestId("navigation-bar")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <NavigationBar
          mode={{
            light: true,
            dark: false,
          }}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

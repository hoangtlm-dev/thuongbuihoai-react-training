import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Header from "../Header";

describe("Button component", () => {
  test("should render header component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    expect(getByTestId("header")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
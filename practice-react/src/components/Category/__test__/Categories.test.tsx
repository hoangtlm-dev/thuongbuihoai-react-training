import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Categories from "../Categories";

describe("Categories component", () => {
  test("should render categories component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Categories />
      </Router>
    );
    expect(getByTestId("categories")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Categories />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

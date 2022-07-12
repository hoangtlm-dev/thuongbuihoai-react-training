import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import CardProductPopular from "../CardProductPopular";
import "@testing-library/jest-dom";

describe("CardPopular component", () => {
  test("should render CardPopular component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductPopular />
      </Router>
    );
    expect(getByTestId("card-product-popular")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <CardProductPopular />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

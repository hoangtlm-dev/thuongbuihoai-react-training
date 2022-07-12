import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import CardProductList from "../CardProductList";
import "@testing-library/jest-dom";

describe("CardProductList component", () => {
  test("should render CardProductList - type is offers component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductList type="offers" content="offers" />
      </Router>
    );
    expect(getByTestId("card-product-list")).toBeInTheDocument();
  });

  test("should render CardProductList - type is best-selling component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductList type="selling" content="selling" />
      </Router>
    );
    expect(getByTestId("card-product-list")).toBeInTheDocument();
  });

  test("should render CardProductList - type is popular component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductList type="popular" content="popular" />
      </Router>
    );
    expect(getByTestId("card-product-list")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <CardProductList type="popular" content="popular" />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import CardProductSelling from "../CardProductSelling";

describe("CardProductSelling component", () => {
  test("should render CardProductSelling component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductSelling />
      </Router>
    );
    expect(getByTestId("card-product-selling")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <CardProductSelling />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

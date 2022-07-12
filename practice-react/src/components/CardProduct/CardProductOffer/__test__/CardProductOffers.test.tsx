import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import CardProductOffer from "../CardProductOffer";

describe("CardProductOffer component", () => {
  test("should render CardProductOffer component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CardProductOffer />
      </Router>
    );
    expect(getByTestId("card-product-offer")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <CardProductOffer />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

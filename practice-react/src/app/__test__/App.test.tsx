import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
  test("rendering a shop page with categoryId that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/products/category/:id";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId("shop-page")).toBeInTheDocument();
  });

  test("rendering a shop page that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/products";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId("shop-page")).toBeInTheDocument();
  });

  test("rendering a product detail component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/products/:id";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId("product-detail")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

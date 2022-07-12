import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer component", () => {
  test("should render Footer component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Footer />
      </Router>
    );
    expect(getByTestId("footer")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Footer />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

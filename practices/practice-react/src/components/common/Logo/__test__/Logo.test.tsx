import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import url from "../../../../assets/images/logos/logo.png";
import Logo from "../Logo";

describe("Logo component", () => {
  test("should render component Logo type 'medium' ", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Logo type="medium" src={url} />
      </Router>
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("should render component Logo type 'large'", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Logo type="large" src={url} />
      </Router>
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Logo src={url} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

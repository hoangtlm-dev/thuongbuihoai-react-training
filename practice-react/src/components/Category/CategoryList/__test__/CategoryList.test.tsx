import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { CATEGORY_LIST } from "@constants/category";
import "@testing-library/jest-dom";
import CategoryList from "../CategoryList";

describe("CategoryList component", () => {
  test("should render categoryList component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <CategoryList categoryList={CATEGORY_LIST} />
      </Router>
    );
    expect(getByTestId("category-list")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <CategoryList categoryList={[]} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

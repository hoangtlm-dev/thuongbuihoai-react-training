import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { DataContext } from "@context/DataContext";
import "@testing-library/jest-dom";
import CategoryCardList from "../CategoryCardList";

const contextProductMock: DataContextProps = {
  searchValue: [],
  setSearchValue: jest.fn(),
  categories: [],
  setCategories: jest.fn(),
  products: [],
  setProducts: jest.fn(),
};

describe("Categories component", () => {
  test("should render categories component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryCardList />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("categories")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CategoryCardList />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

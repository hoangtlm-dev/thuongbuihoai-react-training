import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import CardProductSelling from "../CardProductSelling";
import { DataContextProps } from "@common-types/data";
import { DataContext } from "@context/DataContext";

const contextProductMock: DataContextProps = {
  searchValue: [],
  setSearchValue: jest.fn(),
  categories: [],
  setCategories: jest.fn(),
  products: [],
  setProducts: jest.fn(),
};

describe("CardProductSelling component", () => {
  test("should render CardProductSelling component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CardProductSelling />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("card-product-selling")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CardProductSelling />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

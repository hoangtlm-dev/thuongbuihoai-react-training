import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { DataContext } from "@context/DataContext";
import "@testing-library/jest-dom";
import CardProductOffer from "../CardProductOffer";

const contextProductMock: DataContextProps = {
  searchValue: {},
  setSearchValue: jest.fn(),
  categories: [],
  setCategories: jest.fn(),
  products: [],
  setProducts: jest.fn(),
};

describe("CardProductOffer component", () => {
  test("should render CardProductOffer component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CardProductOffer />
        </Router>
      </DataContext.Provider>
    );
    expect(getByTestId("card-product-offer")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <CardProductOffer />
        </Router>
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

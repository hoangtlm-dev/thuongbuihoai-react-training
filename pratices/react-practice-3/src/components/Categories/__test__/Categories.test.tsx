import "@testing-library/jest-dom";
import Categories from "../Categories";
import mockAxios from "@__mocks__/axios";
import { render } from "@testing-library/react";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import { ProductContext } from "@common-types/product";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { DataContext } from "@context/DataContext";

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn(),
};

describe("Category component", () => {
  test("render category component", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Categories />
      </DataContext.Provider>
    );
    const categories = getByTestId("categories");
    expect(categories).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <DataContext.Provider value={contextProductMock}>
        <Categories />
      </DataContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

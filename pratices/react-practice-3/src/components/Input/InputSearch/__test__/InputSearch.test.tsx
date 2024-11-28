import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputSearch from "../InputSearch";
import { DataContext } from "@context/DataContext";
import { ProductContext } from "@common-types/product";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
  categories: CATEGORY_MOCKING_LIST,
  setCategories: jest.fn()
};

describe("InputSearch component", () => {
  test("should render input search component", () => {
    const { getByTestId } = render(<InputSearch />);
    expect(getByTestId("input-search")).toBeInTheDocument();
  });

  test("display product after inputSearch", async () => {
    act(() => {
      render(
        <DataContext.Provider value={contextProductMock}>
          <InputSearch />
        </DataContext.Provider>
      );
      const inputElement = screen.getByPlaceholderText(
        /Search item/i
      ) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: "Cheese pocket" } });
      expect(inputElement.value).toBe("Cheese pocket");
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<InputSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
});

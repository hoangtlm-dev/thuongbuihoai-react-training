import { CATEGORIES_URL, PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import mockAxios from "@__mocks__/axios";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";


describe("fetch api", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: CATEGORY_MOCKING_LIST});
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("get product item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: PRODUCT_MOCKING});
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING);
  });
})
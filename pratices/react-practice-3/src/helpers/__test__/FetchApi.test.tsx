import mockAxios from "jest-mock-axios";
import { CATEGORIES_URL, PRODUCTS_URL } from "@constants/url";
import { create, remove, getData, update } from "../apiHandle";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
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

  test("add new product item should call", async () => {
    mockAxios.post.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await create(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("update product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1"
    mockAxios.put.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await update(PRODUCT_URL_CALL, PRODUCT_MOCKING);
    expect(mockAxios.put).toHaveBeenCalledWith(PRODUCT_URL_CALL, PRODUCT_MOCKING);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("delete product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1"
    mockAxios.delete.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await remove(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(PRODUCT_MOCKING);
  });
})
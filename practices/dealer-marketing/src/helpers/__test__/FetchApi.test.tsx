import { BLOG_MOCKING_LIST } from "@constants/blog";
import { API_BLOGS } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import mockAxios from "jest-mock-axios";

describe("fetch api", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get blog item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: BLOG_MOCKING_LIST });
    const result = await getData(API_BLOGS);
    expect(mockAxios.get).toHaveBeenCalledWith(API_BLOGS);
    expect(result).toEqual(BLOG_MOCKING_LIST);
  });
});

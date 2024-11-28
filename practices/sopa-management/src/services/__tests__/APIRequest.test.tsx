// Mocks
import mockAxios from 'jest-mock-axios';
import {
  MOCK_PRODUCT,
  MOCK_PRODUCTS
} from '@mocks/product';

// Services
import { api } from '@services/APIRequest';

// Constants
import { PRODUCT_URL } from '@constants/url';

describe('fetch api', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('get product item should call', async () => {
    mockAxios.get.mockResolvedValueOnce({ data: MOCK_PRODUCTS });
    const result = await api.getData(PRODUCT_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCT_URL);
    expect(result).toEqual(MOCK_PRODUCTS);
  });

  test('add new product item should call', async () => {
    mockAxios.post.mockResolvedValueOnce(MOCK_PRODUCTS);
    const result = await api.postData(PRODUCT_URL, MOCK_PRODUCTS);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCT_URL, MOCK_PRODUCTS);
    expect(result).toEqual(MOCK_PRODUCTS);
  });

  test('update product item should call', async () => {
    const PRODUCT_URL_CALL = PRODUCT_URL + '/1';
    mockAxios.put.mockResolvedValueOnce(MOCK_PRODUCT);
    const result = await api.putData(PRODUCT_URL_CALL, MOCK_PRODUCT);
    expect(mockAxios.put).toHaveBeenCalledWith(PRODUCT_URL_CALL, MOCK_PRODUCT);
    expect(result).toEqual(MOCK_PRODUCT);
  });

  test('delete product item should call', async () => {
    const PRODUCT_URL_CALL = PRODUCT_URL + '1';
    mockAxios.delete.mockResolvedValueOnce(MOCK_PRODUCT);
    const result = await api.deleteData(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(MOCK_PRODUCT);
  });

});

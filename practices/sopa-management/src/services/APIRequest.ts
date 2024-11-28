import axios, { AxiosResponse } from 'axios';

/**
 * @param { string } url
 * @returns
 */
const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return response.data;
};

/**
 * Post new data to server
 * @param { string } url
 * @param { Product } newData
 * @returns
 */
const postData = async <T>(url: string, newData: T):Promise<AxiosResponse<T>> => {
  const res = await axios.post(url, newData);

  return res;
};

/**
 * @description Send a changed data to server using method put to updating the data
 * @param id
 * @param dataEdit
 * @returns
 */
const putData = async <T>(id: string, dataEdit: T):Promise<AxiosResponse<T>> => {
  const res = await axios.put(id, {...dataEdit});
  return res;
};

/**
 * @param id
 * @returns
 */
const deleteData = async <T>(id: string): Promise<AxiosResponse<T>> => {
  const res = await axios.delete(id);
  return res;
};

const api = {
  getData,
  postData,
  putData,
  deleteData
};

export { api };

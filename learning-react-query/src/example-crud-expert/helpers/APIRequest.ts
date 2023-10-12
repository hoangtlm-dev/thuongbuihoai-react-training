import axios, { AxiosResponse } from "axios";

/**
 * @description Get data form server
 * @param {String} url
 * @returns
 */
const getData = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url);
  return res.data;
};

/**
 * @description Post new data to server
 * @param { String } url
 * @param newData
 * @returns
 */
const postData = async <T>(url: string, newData: T):Promise<AxiosResponse<T>> => {
  const res = await axios.post(url, newData);
  return res;
};

/**
 * @description Send a changed data to server using method put to updating the data
 * @param { String } id
 * @param dataEdit
 * @returns
 */
const putData = async <T>(id: string, dataEdit: T):Promise<AxiosResponse<T>> => {
  const res = await axios.put(id, {...dataEdit});
  return res;
};

/**
 * @description Delete data
 * @param id
 * @returns
 */
const deleteData = async <T>(id: string): Promise<AxiosResponse<T>> => {
  const res = await axios.delete(id);
  return res;
};

export {
  getData,
  postData,
  putData,
  deleteData,
};

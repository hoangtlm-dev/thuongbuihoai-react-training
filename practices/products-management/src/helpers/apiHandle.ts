import axios, { AxiosResponse } from "axios";

// Get data form server
const getData = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url);
  return res.data;
};

// Post new data to server
const create = async <T>(url: string, newData: T):Promise<AxiosResponse<T>> => {
  const res = await axios.post(url, newData);
  return res;
}

// Send a changed data to server using method put to updating the data
const update = async <T>(id: string, dataEdit: T):Promise<AxiosResponse<T>> => {
  const res = await axios.put(id, {...dataEdit});
  return res;
}

// Delete data
const remove = async <T>(id: string): Promise<AxiosResponse<T>> => {
  const res = await axios.delete(id);
  return res;
}

export {
  getData,
  create,
  update,
  remove
}

import axios from "axios";
import { PRODUCTS_URL } from "../constants/url";
import { useEffect, useState } from "react";

export default function useProduct(isReload: Boolean, setIsReload: Function, filterInput?: {}) {
  const filter = {
    ...filterInput,
  };

  const queryParams: URLSearchParams = new URLSearchParams(filter);
  const [products, setProducts] = useState([]);

  async function fetchMyAPI() {
    const result = await axios
    .get(PRODUCTS_URL + queryParams.toString())
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    setIsReload(false);
  }

  useEffect(() => {
    isReload && fetchMyAPI()
  }, [isReload])

  return products;
}

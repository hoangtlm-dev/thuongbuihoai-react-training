import axios from "axios";
import { useEffect, useState } from "react";

export default function fetchProduct(isReset: Boolean, setIsReset: Function, filterInput?: {}) {
  const filter = {
    ...filterInput,
  };

  const queryParams: URLSearchParams = new URLSearchParams(filter);
  const [products, setProducts] = useState([]);

  async function fetchMyAPI() {
    const result = await axios
    .get("products?"+ queryParams.toString())
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    setIsReset(false)
  }

  useEffect(() => {
    isReset && fetchMyAPI()
  }, [isReset])

  return products;
}

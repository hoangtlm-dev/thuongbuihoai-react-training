import axios from "axios";
import { useEffect, useState } from "react";
import { FilterInputProps } from "../types/filter";

export default function fetchProduct(isReset: Boolean, setIsReset: Function, filterInput?: FilterInputProps) {
  const filter = {
    ...filterInput,
  };
  const queryParams: URLSearchParams = new URLSearchParams(filter);
  const [products, setProducts] = useState([]);

  async function fetchMyAPI() {
    const result = await axios
    .get("products?"+ queryParams.toString())
    .then(function (response) {
      console.log(response);
      setProducts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    setIsReset(false)
  }

  useEffect(() => {
    console.log("reset", isReset);
    isReset && fetchMyAPI()
  }, [isReset])

  return products;
}

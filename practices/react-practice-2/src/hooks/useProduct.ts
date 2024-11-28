import axios from "axios";
import { PRODUCTS_URL } from "../constants/url";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "@/context/LoadingContext";

export default function useProduct() {
  const {isReload, setIsReload, filterInput} = useContext(LoadingContext);

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
    if(isReload) {
      fetchMyAPI()
    }
  }, [isReload])

  return {products};
}

import axios from "axios";
import { CATEGORIES_URL } from "../constants/url";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  async function fetchMyAPI() {
    const result = await axios
    .get(CATEGORIES_URL)
    .then(function (response) {
      setCategories(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    fetchMyAPI()
  }, [])

  return categories;
}

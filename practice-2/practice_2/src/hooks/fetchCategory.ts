import axios from "axios";
import { useEffect, useState } from "react";

export default function fetchCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const result = await axios
      .get("categories")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    fetchMyAPI()
  }, [])

  return categories;
}
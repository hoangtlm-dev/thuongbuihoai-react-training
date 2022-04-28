import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./categories.css"

export default function Category() {
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

  function renderCategoryList(categories: []) {
    return categories.map((category) => 
      <li className="categories__item">
        <Link to="/" state={category} key={category.id}>{category.name}</Link>
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">PRODUCT CATEGORIES</p>
        <ul className="categories__list">
          {renderCategoryList(categories)}
        </ul>
      </div>
    </>
  )
}
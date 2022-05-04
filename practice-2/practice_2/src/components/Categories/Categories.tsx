import React from "react";
import { Link } from "react-router-dom";
import fetchCategory from "../../hooks/fetchCategory";
import { CategoriesProps } from "../../types/categories";
import "./categories.css"

export default function Category() {
  const categories = fetchCategory();

  function renderCategoryList(categories: []) {
    return categories.map((category: CategoriesProps, index: number) => 
      <li key={index} className="categories__item">
        <Link to="/" state={category} key={category.id}>{category.name}</Link>
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">PRODUCT CATEGORIES</p>
        <ul className="categories__list">
          {renderCategoryList(categories as [])}
        </ul>
      </div>
    </>
  )
}
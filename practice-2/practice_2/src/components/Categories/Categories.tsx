import React from "react";
import { CategoriesProps } from "../../types/categories";
import { FilterProps } from "../../types/filter";
import "./categories.css"

export default function Category({ categoriesList }: FilterProps) {
  function renderCategoryList(list: CategoriesProps[]) {
    return list.map((item) => 
      <li className="categories__item">
        <a href="#" key={item.id}>{item.name}</a>
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">PRODUCT CATEGORIES</p>
        <ul className="categories__list">
          {renderCategoryList(categoriesList)}
        </ul>
      </div>
    </>
  )
}
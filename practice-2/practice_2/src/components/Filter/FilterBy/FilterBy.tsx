import React from "react";
import { CategoriesProps } from "../../../types/categories";
import { FilterByProps } from "../../../types/filter";
import "./filterBy.css"

export default function FilterBy({ filterBy }: FilterByProps) {
  function renderFilterBy(list: CategoriesProps[]) {
    return list.map((item) => 
      <li className="filterBy__item">
        <label htmlFor="" className="filterBy__group">
         <span className="filter__checkbox">
          <input type="checkbox" />
         </span>
          <span className="filter__text" key={item.id}>{item.name}<span> ({item.count})</span></span>
        </label>
      </li>
    );
  }

  return (
    <>
      <div className="filterBy">
        <p className="filterBy__title">FILTER BY</p>
        <ul className="filterBy__list">
          {renderFilterBy(filterBy)}
        </ul>
      </div>
    </>
  )
}
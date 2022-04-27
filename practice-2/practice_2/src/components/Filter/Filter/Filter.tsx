import React from "react";
import { DEFAULT_CATEGORY, DEFAULT_FILTERER } from "../../../constants/categories";
import Button from "../../common/Button/Button";
import Category from "../../Categories/Categories";
import FilterBy from "../FilterBy/FilterBy";
import "./filter.css"

export default function Filter({}) {
  return (
    <div className="filter">
      <Button className="filter" value="Filter" />
      <input type="checkbox" hidden className="filter__input" id="filter__check" />
      <label htmlFor="filter__check" className="filter__overlay"></label>
      <div className="filters">
        <Category categoriesList={DEFAULT_CATEGORY} />
        <FilterBy filterBy={DEFAULT_FILTERER} />
      </div>
    </div>
  )
}
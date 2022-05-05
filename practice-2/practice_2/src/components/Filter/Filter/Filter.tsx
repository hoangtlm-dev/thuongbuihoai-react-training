import React from "react";
import { DEFAULT_FILTERER } from "../../../constants/categories";
import Label from "../../common/Label/Label";
import Category from "../../Categories/Categories";
import FilterBy from "../FilterBy/FilterBy";
import "./filter.css"
import { FilterByCategory } from "../../../types/filter";

const Filter: React.FC<FilterByCategory> = ({ setFilterInput }) => {
  return (
    <div className="filter">
      <Label className="filter" value="Filter" />
      <input type="checkbox" hidden className="filter__input" id="filter__check" />
      <label htmlFor="filter__check" className="filter__overlay"></label>
      <div className="filters">
        <Category setFilterInput={setFilterInput}/>
        <FilterBy filterBy={DEFAULT_FILTERER} />
      </div>
    </div>
  )
}

export default Filter;

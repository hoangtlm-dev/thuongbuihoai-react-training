import React, { useContext } from "react";
import { ProductListContext } from "../../App";
import { SearchProps } from "../../types/search";
import "./search.css"

const Search: React.FC<SearchProps> = ({ setFilterInput }) => {
  const setIsReset = useContext(ProductListContext) as Function
  const handleSearch = (e: { target: { value: string }}) => {
    const nameLike = {name_like:e.target.value}
    setFilterInput(nameLike);
    setIsReset(true)
  }

  return (
    <div className="search">
      <input
        onChange={handleSearch}
        type="text"
        className="search__text"
        placeholder="Search item"
      />
    </div>
  );
}

export default Search;

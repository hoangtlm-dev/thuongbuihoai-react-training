import React, { memo, useContext } from "react";
import { ProductListContext } from "@/context/MainContext";
import { SearchProps } from "@/types/search";
import "./inputSearch.css";

const InputSearch: React.FC<SearchProps> = ({ setFilterInput }) => {  
  const setIsReset = useContext(ProductListContext) as Function;
  const handleSearch = (e: { target: { value: string } }) => {
    const nameLike = {name_like:e.target.value};
    setFilterInput(nameLike);
    setIsReset(true);
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

export default memo(InputSearch);

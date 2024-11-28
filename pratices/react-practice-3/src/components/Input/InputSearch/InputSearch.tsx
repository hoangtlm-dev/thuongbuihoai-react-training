import React, { useContext } from "react";
import { DataContext } from "@context/DataContext";
import "./inputSearch.css";

const InputSearch: React.FC = () => {
  // handle search with SearchContext
  const { setSearchValue } = useContext(DataContext);
  const handleSearch = (e: { target: { value: string } }) => {
    // get current name
    const nameLike = { name_like: e.target.value };
    setSearchValue?.(nameLike);
  };

  return (
    <div data-testid="input-search" className="search">
      <input
        className="search__text"
        type="text"
        placeholder="Search item"
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputSearch;

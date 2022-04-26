import React from "react";
import "./search.css"

export default function Search() {
  return (
    <div className="search">
      <input
        type="text"
        className="search__text"
        placeholder="Search item"
      />
    </div>
  );
}

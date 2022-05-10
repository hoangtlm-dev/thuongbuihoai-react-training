import React from "react";
import { SearchByName } from "@/types/search";
import InputSearch from "../InputSearch/InputSearch";
import "./navigation.css";

const Navigation: React.FC<SearchByName> = ({ setFilterInput }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="" className="nav__link"> <i className="fa fa-clock"></i> Mon - Sat: 8AM - 5PM</a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link"> <i className="fa fa-phone"></i> 123 456 7890</a>
        </li>
      </ul>
      <InputSearch setFilterInput={setFilterInput} />
    </nav>
  );
}

export default Navigation;

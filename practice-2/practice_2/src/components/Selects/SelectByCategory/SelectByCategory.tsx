import React, { useCallback, useState } from "react";
import ModalSelects from "../ModalSelects/ModalSelects";
import "./selectByCategory.css";

const SelectByCategory: React.FC = () => {
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const handleOpenModalFilter = useCallback(() => {
    setOpenModalSearch(true);
  }, []);

  return (
    <div className="filter">
      <button className="btn btn__filter" onClick={handleOpenModalFilter}>Filter</button>
      <input type="checkbox" hidden className="filter__input" id="filter__check" />
      <label htmlFor="filter__check" className="filter__overlay" />
      { openModalSearch && <ModalSelects setOpenModalSearch={setOpenModalSearch}/>}
    </div>
  );
}

export default SelectByCategory;

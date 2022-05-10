import React from "react"
import { ModalFilterProps } from "types/modal";
import FilterBy from "../FilterBy/FilterBy";
import Category from "../../Categories/Categories";
import { DEFAULT_FILTERER } from "@/constants/categories";

const ModalSelects: React.FC<ModalFilterProps> = ({ setFilterInput, setOpenModalSearch }) => {

  return (
    <div className="modal__filter">
      <Category setOpenModalSearch={setOpenModalSearch} setFilterInput={setFilterInput}/>
      <FilterBy filterBy={DEFAULT_FILTERER} />
    </div>
  );
}

export default ModalSelects;

import React from "react"
import { ModalFilterProps } from "types/modal";
import FilterBy from "../FilterBy/FilterBy";
import Category from "../../Categories/Categories";
import { DEFAULT_FILTERER } from "@/constants/categories";

const ModalSelects: React.FC<ModalFilterProps> = ({ setOpenModalSearch }) => {

  return (
    <div className="modal__filter">
      <Category setOpenModalSearch={setOpenModalSearch} />
      <FilterBy filterBy={DEFAULT_FILTERER} />
    </div>
  );
}

export default ModalSelects;

import { ProductProps } from "./product";

export interface ModalDeleteProps {
  id: string;
  hideModalDelete: Function;
}

export interface ModalUpdateProps {
  id: string;
  hideModalUpdate: Function;
  onChangeProductDetail: (product: ProductProps) => void;
}

export interface ModalFilterProps {
  setFilterInput: Function;
  setOpenModalSearch: Function;
}
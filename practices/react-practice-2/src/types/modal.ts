import { Product } from "./product";

export interface ModalDeleteProps {
  id: string;
  hideModalDelete: Function;
}

export interface ModalUpdateProps {
  product: Product;
  hideModalUpdate: Function;
  onChangeProductDetail: (product: Product) => void;
}

export interface ModalFilterProps {
  setOpenModalSearch: Function;
}
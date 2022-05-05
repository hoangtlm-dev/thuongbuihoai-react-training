import { ProductType } from "./product";

export interface FormProps {
  id: string;
  hideModalUpdate: Function;
  onChangeProductDetail: (product: ProductType) => void;
}
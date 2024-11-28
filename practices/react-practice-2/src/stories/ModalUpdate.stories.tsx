import React from "react";
import { ProductProps } from "types/product";
import ModalUpdate from "../components/Modal/ModelUpdate/ModalUpdate";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ModalUpdate",
  component: ModalUpdate,
};

export function Default(hideModalUpdate: Function) {
  return <ModalUpdate id={""} hideModalUpdate={hideModalUpdate} onChangeProductDetail={function (product: ProductProps): void {
    throw new Error("Function not implemented.");
  } } />;
}
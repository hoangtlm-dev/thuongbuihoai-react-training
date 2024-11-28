export enum FieldName {
  categoryId = "categoryId",
  name = "name",
  price = "price",
  quantity = "quantity",
  description = "description",
  images = "images",
}

export interface Field {
  value: string,
  rules: string[],
  error: string,
}

export type FormProps = {
  [key in FieldName]: Field
}
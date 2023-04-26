export interface ColumnHeader {
  value?: string;
  key?: string;
}

export interface TableType {
  id?: string;
  productImage: {
    url: string;
    alt: string;
  };
  product?: string;
  status?: boolean;
  type?: string;
  quantity?: number;
  brandImage: {
    url: string;
    alt: string;
  };
  brand: string;
  price: number;
}

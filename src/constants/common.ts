import { StatusTypes } from '../types/status';
import { TableType } from '../types/table';
import { ASSETS } from './assets';

export const STATUS: StatusTypes[] = [
  {
    id: '1',
    value: 'All',
    key: 'all'
  },
  {
    id: '2',
    value: 'Available',
    key: 'available'
  },
  {
    id: '3',
    value: 'Sold out',
    key: 'sold-out'
  }
];

export const TYPE: StatusTypes[] = [
  {
    id: '1',
    value: 'All',
    key: 'all'
  },
  {
    id: '2',
    value: 'Bravo',
    key: 'bravo'
  },
  {
    id: '3',
    value: 'Alfa',
    key: 'alfa'
  },
  {
    id: '3',
    value: 'Gold',
    key: 'gold'
  }
];

export const COLUMNS_HEADER = [
  {
    value: 'Product',
    key: 'product'
  },
  {
    value: 'Status',
    key: 'status'
  },
  {
    value: 'Type',
    key: 'type'
  },
  {
    value: 'Quantity',
    key: 'quantity'
  },
  {
    value: 'Brand',
    key: 'brand'
  },
  {
    value: 'Price',
    key: 'price'
  },
  {
    value: 'Action',
    key: 'action'
  },
]

export const TABLE: TableType[] = [
  {
    id: '1',
    productImage: {
      url: ASSETS.IBM,
      alt: 'This is image product IBM'
    },
    product: 'Louis Vuitton',
    status: true,
    type: 'Bravo',
    quantity: 9177,
    brandImage: {
      url: ASSETS.IBM,
      alt: 'This is image product IBM'
    },
    brand: 'Evan Flores',
    price: 452.85,
  },
  {
    id: '2',
    productImage: {
      url: ASSETS.arleneWilson,
      alt: 'This is image Arlene Wilson'
    },
    product: 'Johnson & Johnson',
    status: false,
    type: 'Alfa',
    quantity: 3064,
    brandImage: {
      url: ASSETS.arleneWilson,
      alt: 'This is image Arlene Wilson'
    },
    brand: 'Arlene Wilson',
    price: 901.33,
  }
]

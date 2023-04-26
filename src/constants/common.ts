import { StatusTypes } from '../types/status';

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

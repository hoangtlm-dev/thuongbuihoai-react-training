import { CardProps } from "./card";

export interface PlanProps {
  cardList?: CardProps[];
  planTitle?: string;
  className?: string;
  title?: string;
  unit?: string;
  price?: number;
  value1: string;
  value2: string;
  value3: string;
  value4?: string;
  label?: string;
  
}
import { ReactNode } from "react";

export interface Option {
  id: number;
  car: string;
  salesman: string;
  initialDate: string;
  paymentDate: string;
  imgLogo: string;
  price: string;
  imgCar: string;
  manager: string;
  client: string;
  agency: string;
}
export interface ColumnFilterSalesProps {
  children?: ReactNode;

  options?: Array<{
    id: number;
    car: string;
    salesman: string;
    initialDate: string;
    paymentDate: string;
    imgLogo: string;
    price: string;
    imgCar: string;
    manager: string;
    client: string;
    agency: string;
  }>;

  onFilterChange?: (filteredData: Array<Option>) => void;
}

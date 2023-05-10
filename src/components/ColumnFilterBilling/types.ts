import { ReactNode } from "react";

export interface Option {
  date: string;
  billingAccount: string;
  clientName: string;
  amount: string;
}

export interface ColumnFilterBillingProps {
  children?: ReactNode;
  options?: Array<Option>;
  onFilterChange?: (filteredData: Array<Option>) => void;
}
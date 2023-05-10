import { ReactNode } from "react";

export interface InsuranceCardProps {
  insuranceId: number;
  name: string;
  duration: string;
  price: string;
  description: string;
  agency: number;
  crane: boolean;
  thirdQty: string;
  totalLoss: string;
  selfQty: string;

  children?: ReactNode;
}

import { ReactNode } from "react";

export interface CarAccordionProp {
  
  options?: Array<{ id: number; car: string; salesman: string; initialDate: string; paymentDate: string; imgLogo: string; price: string; imgCar: string; manager: string; client: string; agency: string; }>;

  children?: ReactNode;
}


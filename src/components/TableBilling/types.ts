import { ReactNode } from "react";

export interface TableBillingProp {
  
  options?: Array<{date: string; billingAccount:string; clientName: string; amount: string}>;

  children?: ReactNode;
}


import { ReactNode } from "react";

export interface InsuranceProp {
  
  options?: Array<{imgSrc: string; description: string; insuranceId: number; name: string; duration: string; price: string; agency: number; crane: boolean; thirdQty: string; totalLoss: string; selfQty: string }>;

  children?: ReactNode;
}


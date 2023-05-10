import { ReactNode } from "react";

export interface ColumnFilterProps {
    children?: ReactNode;
    options: Array<{ 
        id: number,
        brand: string,
        name: string,
        price: number,
        src: string,
        location: string,
        km: number,
        model: number,
        car_condition: boolean,     // true = new, false = used
        transmission: string,
        passengers: number,
        type: string,
        color: string,
        fuel: string,
        }>;
    reset?: () => void;
    ref: any;
    setCarData: (data: any) => void;
}
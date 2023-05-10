export interface CarDetailsProp {
    /**
   * There are 2 card types: description (static info) and comparison (dynamic info, by default)
   */
    cardType?: string;
    /**
   * Car - Manual version
   */
    manualCar?: {
        name: string;
        car_image: string;
        agency: string;
        price: number;
        power: number;
        acceleration: number;
        max_speed: number;
        consumption: number;
        carbon_emissions: number;
        height: number;
        width: number;
        length: number;
    };
    /**
   * Car - Automatic version
   */
    automaticCar?: {
        name: string;
        car_image: string;
        agency: string;
        price: number;
        power: number;
        acceleration: number;
        max_speed: number;
        consumption: number;
        carbon_emissions: number;
        height: number;
        width: number;
        length: number;
    };

    /**
   * onChange - Function use to update the state of the parent's state
   */
    onChange?: () => void;
}

export interface SelectableButtonProps {
    fullWidth?: boolean;
    colored?: boolean;
}
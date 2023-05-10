export interface PriceSliderProps {
    /**
     * The maximum value of the slider
     */
    max: number;

    /**
     * The minimum value of the slider
     */
    min: number;

    /**
     * The step of the slider
     */
    step: number;

    /**
     * The max setter of the slider
     */
    setMax: (data: any) => void;

    /**
     * The min setter of the slider
     */
    setMin: (data: any) => void;

    reset?: () => void;
    ref: any;
}
export interface CarCardVariantsProps {
    /**
     * Car image url
     */
    carImg: string;
    /**
     *  Car name
    */
    name: string;
    /**
     * Agency name (Optional)
    */
    agency?: string;
    /**
     * Company logo (Optional)
     */
    companyLogo?: string;
    /**
     * Price (Optional)
     */
    price?: string;
    /**
     * Variant (Optional)
     */
    variant?: 'var1' | 'var2' | 'var3' | 'var4' | 'var5';
    /**
     * Card color (Optional)
     */
    color?: string;
    /**
     * Card width (Optional)
     */
    width?: string;

    /**
     * Card height (Optional)
     */
    contained?: boolean;

    /**
     * onChange - Function use to update the state of the parent's state
     */
    onChange?: () => void;
}

export interface LabelProps {
    color: string;
}
export interface CarInfoProps {
    /**
     * Car name
     */
    title: string;
    /**
     * Car year (Optional)
     */
    year?: string;
    /**
     * Car mileage (km) (Optional)
     */
    mileage?: string;
    /**
     * Agency location (Optional)
     */
    agency?: string;
    /**
     * Car price (Optional)
     */
    price?: string;
    /**
     * Favorite icon (can be hidden if it's not needed)
     */
    starIcon?: boolean;
}
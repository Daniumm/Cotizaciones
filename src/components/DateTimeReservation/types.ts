export interface DateTimeReservationProp {
    /**
     * Date properties used in the DateBar partial as an array of strings. The required format is "weekday number month"
     */
    dates: string[];
    /**
     * Available hours used in the TimeBar partial as an array of strings
     */
    availableHours: string[];
}
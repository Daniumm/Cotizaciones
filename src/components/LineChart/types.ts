export interface LineChartProp {
    /**
     * This array contains the name of the labels (months)
     */
    labelProps: string[];
    /**
     * This is the information to be displayed on the chart
     */
    dataProps: number[];
    /**
     * Color of the the graph line
     */
    lineColor?: string;
    /**
     * Color of the the graph point
     */
    pointColor?: string;
} 
export interface DoughnutChartProp {
    /**
     * This array contains the name of the labels. It already has some default values. Array's length shouldn't be != 2
     */
    labelProps?: string[];
    /**
     * This is the information to be displayed on the chart. Array's length shouldn't be != 2
     */
    dataProps: number[];
    /**
     * Color for label 1: The parameter receives colors in hexadecimal and rgb format. It already has some default values
     */
    colorProp1?: string;
    /**
     * Color for label 2: The parameter receives colors in hexadecimal and rgb format. It already has some default values
     */
    colorProp2?: string;
}
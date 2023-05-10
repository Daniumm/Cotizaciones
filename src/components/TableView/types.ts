export interface TableRow { 
    /**
     * Row description (car feature)
     */
    description: string;
    /**
     * Row value (car feature value)
     */
    value: string;
}

export interface TableViewProps {
    /**
     * Table header
     */ 
    sectionHeader?: string;
    /**
     * Table rows
     */
    rows: TableRow[];
}
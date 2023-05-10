import React from 'react'
import { TableViewProps } from './types'
import { TableHeader, Table, Value, Description, Row, TableWrapper } from './styles';

const TableView: React.FC<TableViewProps> = ({
    sectionHeader = "None",
    rows
}) => {
    return (
        <Table>
            <TableHeader>{sectionHeader}</TableHeader>
            <TableWrapper>
                {rows.map(({ description, value }) => (
                    <Row key={description}>
                        <Description>{description}</Description>
                        <Value>{value}</Value>
                    </Row>
                ))}
            </TableWrapper>
        </Table>
    )
}

export default TableView;
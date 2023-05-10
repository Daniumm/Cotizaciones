import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from "@mui/material";
import { TableBillingProp } from "./types";



const TableBilling: React.FC<TableBillingProp> = ({
  options = [
    {
      date: "07/03/2023",
      billingAccount: "Billing Account 1",
      clientName: "Ángel Ruiz Luna",
      amount: "MXN 7,590.00",
    },
    {
      date: "02/03/2023",
      billingAccount: "Billing Account 2",
      clientName: "Mónica Ramírez...",
      amount: "MXN 9,280.00",
    },
    {
      date: "28/02/2023",
      billingAccount: "Billing Account 3",
      clientName: "Owen Rosales R...",
      amount: "MXN 5,892.00",
    },
    {
      date: "23/02/2023",
      billingAccount: "Billing Account 4",
      clientName: "Axel Pailla Ame...",
      amount: "MXN 11,210.00",
    },
    {
      date: "19/02/2023",
      billingAccount: "Billing Account 1",
      clientName: "Bernardo Gueva...",
      amount: "MXN 7,590.00",
    },
    {
      date: "17/02/2023",
      billingAccount: "Billing Account 2",
      clientName: "Ximena Carillo Z...",
      amount: "MXN 9,280.00",
    },
    {
      date: "12/02/2023",
      billingAccount: "Billing Account 3",
      clientName: "André Cuevas G...",
      amount: "MXN 5,892.00",
    },
    {
      date: "07/02/2023",
      billingAccount: "Billing Account 4",
      clientName: "Donají Monzalvo...",
      amount: "MXN 11,210.00",
    },
    {
      date: "28/01/2023",
      billingAccount: "Billing Account 3",
      clientName: "Josselin Pineda V...",
      amount: "MXN 5,892.00",
    },
    {
      date: "22/01/2023",
      billingAccount: "Billing Account 4",
      clientName: "Manuel Antonio G...",
      amount: "MXN 11,210.00",
    },
  ],
  
}) => {
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Billing Account</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {options.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.billingAccount}</TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBilling;

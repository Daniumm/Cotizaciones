import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { InsuranceCardProps } from "./types";
import { CardText, InLine, UpperBold } from "./styles";

const InsuranceCard: React.FC<InsuranceCardProps> = ({
  insuranceId,
  name,
  duration,
  price,
  description,
  agency,
  crane,
  thirdQty,
  totalLoss,
  selfQty,
  
}) => {
  const options = {
    "Insurance ID": insuranceId,
    Name: name,
    Duration: duration,
    Price: price,
    Description: description,
    Agency: agency,
    Crane: crane ? "Yes" : "No",
    "Third Qty": thirdQty,
    "Total Loss": totalLoss,
    "Self Qty": selfQty,
  };

  return (
    <Card>
      <CardContent>
        {Object.entries(options).map(([key, value]) => (
          <CardText key={key}>
            <UpperBold>{key}:</UpperBold> <InLine>{value}</InLine>
          </CardText>
        ))}
      </CardContent>
    </Card>
  );
};

export default InsuranceCard;

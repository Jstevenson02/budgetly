import React from "react";
import { TotalDisplayProps } from "../types";

function TotalDisplay({ expenses }: TotalDisplayProps) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <h3>Total Spent: ${total.toFixed(2)}</h3>;
}

export default TotalDisplay;

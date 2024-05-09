import React from "react";
import { ExpenseListProps } from "../types";
function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name}: ${expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

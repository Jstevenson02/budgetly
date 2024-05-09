"use client";

import React, { useState } from "react";
import BudgetForm from "@/app/components/BudgetForm";
import { Expense } from "./types";
import ExpenseList from "./components/ExpenseList";
import TotalDisplay from "./components/TotalDisplay";

function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Simple Budget App</h1>
      <BudgetForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <TotalDisplay expenses={expenses} />
    </div>
  );
}

export default Home;

"use client";

import React, { useEffect, useState } from "react";
import BudgetForm from "@/app/components/BudgetForm";
import { Expense } from "./types";
import ExpenseList from "./components/ExpenseList";
import TotalDisplay from "./components/TotalDisplay";

function Home() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Use useEffect to update localStorage when expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className='flex justify-center flex-col gap-4'>
      <h1>budgetly</h1>
      <BudgetForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <TotalDisplay expenses={expenses} />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import { BudgetFormProps } from "@/app/types";

function BudgetForm({ onAddExpense }: BudgetFormProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense({ name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Expense Name'
        required
      />
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Amount'
        required
      />
      <button type='submit'>Add Expense</button>
    </form>
  );
}

export default BudgetForm;

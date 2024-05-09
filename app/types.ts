export interface Expense {
  name: string;
  amount: number;
}

export interface BudgetFormProps {
  onAddExpense: (expense: Expense) => void;
}

export interface ExpenseListProps {
  expenses: Expense[];
}

export interface TotalDisplayProps {
  expenses: Expense[];
}

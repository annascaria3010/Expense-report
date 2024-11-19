import React, { createContext, useState } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setTotalExpense((prevTotal) => prevTotal + expense.amount);
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ totalExpense, expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

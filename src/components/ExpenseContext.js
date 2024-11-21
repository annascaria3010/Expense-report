import React, { createContext, useState } from 'react';

const ExpenseContext = createContext(); // Create context

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setTotalExpense((prevTotal) => prevTotal + expense.amount);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses,totalExpense,setTotalExpense, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

import React, { createContext, useState } from 'react';

const ExpenseContext = createContext(); // Create context

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [editingExpense, setEditingExpense] = useState(null);
    
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setTotalExpense((prevTotal) => prevTotal + expense.amount);
  };

  const updateExpenses = (updatedExpense) => {
    setExpenses((prevExpenses) => 
      prevExpenses.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
    )
  }

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses,totalExpense,setTotalExpense, addExpense, editingExpense,setEditingExpense, updateExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

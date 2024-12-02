import React, { createContext, useState } from 'react';

const ExpenseContext = createContext(); // Create context

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [editingExpense, setEditingExpense] = useState(null);
    
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    {expense.category === 'income' 
      ?setTotalExpense((prevTotal) => prevTotal + expense.amount)
    : setTotalExpense((prevTotal) => prevTotal - expense.amount)};
  };

  const updateExpenses = (updatedExpense) => {
    setExpenses((prevExpenses) => 
      prevExpenses.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
    )
  

  const oldExpense = expenses.find((expense) => expense.id === updatedExpense.id);
  if(oldExpense) {
     setTotalExpense ((prevTotal) => {
      if (oldExpense.category === 'income' && updatedExpense.category=== 'expense') {
        setTotalExpense ((prevTotal) => {prevTotal= prevTotal-oldExpense.amount - updatedExpense.amount
      })
    }
      else if (oldExpense.category ==='expense' && updatedExpense.category=== 'income') {
        setTotalExpense ((prevTotal) => { prevTotal= prevTotal + oldExpense.amount + updatedExpense.amount
        })
      }
      else if (oldExpense.category=== updatedExpense.category) {
        if (oldExpense.category=== 'income') {
          prevTotal= prevTotal - oldExpense.amount + updatedExpense.amount
        }
        else if (oldExpense.category === 'expense') {
          prevTotal= prevTotal + oldExpense.amount - updatedExpense.amount
        }
      }
    });
  }
  };
  
  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses,totalExpense,setTotalExpense, addExpense, editingExpense,setEditingExpense, updateExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

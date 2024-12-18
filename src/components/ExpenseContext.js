import React, { createContext, useState, useCallback } from 'react';
import { use } from 'react';

const ExpenseContext = createContext(); // Create context

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [editingExpense, setEditingExpense] = useState(null);
  const [totalInc, setTotalInc] = useState(0);
  const [totalExp, setTotalExp] = useState(0);

  
  const addExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    {expense.category === 'income'? setTotalExpense((prevTotal) => prevTotal + expense.amount) 
      : setTotalExpense((prevTotal) => prevTotal - expense.amount) };
  },[])

  const updateExpenses = useCallback((updatedExpense) => {
    setExpenses((prevExpenses) => 
      prevExpenses.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
    )
  

  const oldExpense = expenses.find((expense) => expense.id === updatedExpense.id);
  if (oldExpense && updatedExpense.amount !== undefined) {
    setTotalExpense ((prevTotal) => {
      if (oldExpense.category === 'income' && updatedExpense.category=== 'expense'){
        return prevTotal - oldExpense.amount - updatedExpense.amount;
      }
      else if (oldExpense.category === 'expense' && updatedExpense.category === 'income') {
        return  prevTotal + oldExpense.amount + updatedExpense.amount;
      }
      else if (oldExpense.category === updatedExpense.category) {
        if (oldExpense.category === 'income') {
          return prevTotal - oldExpense.amount + updatedExpense.amount;
        } else if (oldExpense.category === 'expense') {
          return prevTotal + oldExpense.amount - updatedExpense.amount;
        }
      }
      return prevTotal;
    });
 }
  }, [expenses]);
  
  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses,totalExpense,setTotalExpense,totalInc,setTotalInc,totalExp, setTotalExp, addExpense, editingExpense,setEditingExpense, updateExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;

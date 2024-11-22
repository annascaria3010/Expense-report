import React, {useContext, useState } from 'react';
import './ExpenseList.css';
import { useNavigate } from "react-router-dom";
import ExpenseContext from './ExpenseContext';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

function ExpenseList({}) {
  const navigate = useNavigate();
  const { expenses, setExpenses, totalExpense, setTotalExpense,setEditingExpense } = useContext(ExpenseContext);
  const [editId, setEditId] = useState(null);
  

  // Delete Expense
  const handleDelete = (id) => {
    const expenseToDelete = expenses.find((expense) => expense.id===id)
    
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    if(expenseToDelete)
    setTotalExpense(totalExpense - expenseToDelete.amount);
  };

  

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    navigate('/expenseform');
  };  
  
    return (
      <div className='List'>
      <h2 className='list-heading'>Expenses</h2>
      {expenses && expenses.length > 0 ? (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount (¥)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
              
                <td>{expense.description}</td>
                <td >{expense.amount.toFixed(2)}</td>
                <td><button  onClick= {() => handleEdit(expense)} className='list-btn edit-btn'>
                    <AiFillEdit />
                  </button>
                  <button onClick={() => handleDelete(expense.id)} className='list-btn delete-btn'>
                    <FaTrash />
                  </button></td>
                  
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses yet</p>
      )}
    </div>
    );
  }

export default ExpenseList;

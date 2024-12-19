import React, {useContext } from 'react';
import './ExpenseList.css';
import { useNavigate } from "react-router-dom";
import ExpenseContext from './ExpenseContext';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

function ExpenseList({}) {
  const navigate = useNavigate();
  const { expenses, setExpenses, setTotalExpense,setEditingExpense } = useContext(ExpenseContext);
  

  // Delete Expense
  const handleDelete = (id) => {
    const expenseToDelete = expenses.find((expense) => expense.id===id)
    

    if (expenseToDelete) {
      setTotalExpense((prevTotal) => 
        expenseToDelete.category === 'income' 
          ? prevTotal - expenseToDelete.amount 
          : prevTotal + expenseToDelete.amount
      );
    }
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

    
  };

  

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    navigate('/expenseform');
  };  
  
    return (
      <div className='List'>
      <h2 className='list-heading'>History</h2>
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
                
                <td style={{ color: expense.category === 'income' ? 'green' : 'red' }}>
                 {expense.category === 'income' 
                  ? `+${expense.amount.toFixed(2)}` 
                  : `-${expense.amount.toFixed(2)}`}
  </td>
                
                
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
        <p>Make History</p>
      )}
    </div>
    );
  }

export default ExpenseList;

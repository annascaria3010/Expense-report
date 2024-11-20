import React, {useContext, useState } from 'react';
import './ExpenseList.css';
import ExpenseContext from './ExpenseContext';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

function ExpenseList({}) {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ description: '', amount: '' });

  // Delete Expense
  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Toggle Edit Mode
  const handleEdit = (expense) => {
    setEditId(expense.id);
    setEditForm({ description: expense.description, amount: expense.amount });
  };

  // Save Edits
  const handleSave = (id) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id
        ? { ...expense, description: editForm.description, amount: parseFloat(editForm.amount) }
        : expense
    );
    setExpenses(updatedExpenses);
    setEditId(null); // Exit edit mode
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
              {editId === expense.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={editForm.amount}
                        onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => handleSave(expense.id)}
                        className="list-btn save-btn"
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                <td>{expense.description}</td>
                <td >{expense.amount.toFixed(2)}</td>
                <td><button  onClick= {handleEdit} className='list-btn edit-btn'>
                    <AiFillEdit />
                  </button>
                  <button onClick={() => handleDelete(expense.id)} className='list-btn delete-btn'>
                    <FaTrash />
                  </button></td>
                  </>
                )}
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

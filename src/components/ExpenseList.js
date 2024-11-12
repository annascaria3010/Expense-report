import React from 'react';

function ExpenseList({ expenses, onEdit, onDelete }) {
  return (
    <div className="exp-list">
      <h2>Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={() => onEdit(expense)} className="edit-button">Edit</button>
            <button onClick={() => onDelete(expense.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

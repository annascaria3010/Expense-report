import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
    return (
      <div className='expenseList'>
        <h2>Expenses</h2>
        <ul className="expense-list">
          {expenses && expenses.length > 0 ? (
            expenses.map((expense) => (
              <li key={expense.id}>
                <span>{expense.description}</span>
                <span>${expense.amount.toFixed(2)}</span>
              </li>
            ))
          ) : (
            <p>No expenses found</p>
          )}
        </ul>
      </div>
    );
  }

export default ExpenseList;

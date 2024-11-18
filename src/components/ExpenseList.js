import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
    return (
      <div className='List'>
      <h2 className='list-heading'>Expenses</h2>
      {expenses && expenses.length > 0 ? (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount (¥)</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount.toFixed(2)}</td>
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

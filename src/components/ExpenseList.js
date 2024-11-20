import React, {useContext} from 'react';
import './ExpenseList.css';
import ExpenseContext from './ExpenseContext';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

function ExpenseList({}) {
  const { expenses } = useContext(ExpenseContext);
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
              
                <td  >
                  {expense.amount.toFixed(2)} 
                  <div className="icon-buttons">
                <button className="list-btn edit-btn">
                  <AiFillEdit />
                </button>
                <button className="list-btn delete-btn">
                  <FaTrash />
                </button>
              </div>
                </td>
                
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

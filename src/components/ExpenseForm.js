import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense, onClose, expenseToEdit, onUpdateExpense }) {
  const [form, setForm] = useState({ description: '', amount: '' });

  useEffect(() => {
    if (expenseToEdit) {
      setForm({
        description: expenseToEdit.description,
        amount: expenseToEdit.amount,
      });
    } else {
      setForm({ description: '', amount: '' });
    }
  }, [expenseToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      id: expenseToEdit ? expenseToEdit.id : Date.now(),
      description: form.description,
      amount: parseFloat(form.amount),
    };

    if (expenseToEdit) {
      onUpdateExpense(expenseData); // Update existing expense
    } else {
      onAddExpense(expenseData); // Add new expense
    }
    onClose();
  };

  return (
    <div className="expense-form-overlay">
      <div className="expense-form-modal">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Expense Description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
          <button type="submit">{expenseToEdit ? "Update Expense" : "Add Expense"}</button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;

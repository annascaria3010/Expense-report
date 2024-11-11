import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [form, setForm] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      description: form.description,
      amount: parseFloat(form.amount),
    };
    onAddExpense(newExpense);
    setForm({ description: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
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
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

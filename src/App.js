import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const handleOpenForm = () => {
    setExpenseToEdit(null); // Reset form for new expense
    setShowForm(true);
  };

  const handleEditExpense = (expense) => {
    setExpenseToEdit(expense); // Load the selected expense for editing
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setExpenseToEdit(null);
  };

  return (
    <div className={`App ${expenses.length === 0 ? 'centered' : ''}`}>
      <Title />
      <button onClick={handleOpenForm} className="add-expense-button">
        Add Expense
      </button>

      {showForm && (
        <ExpenseForm
          onAddExpense={addExpense}
          onClose={handleCloseForm}
          expenseToEdit={expenseToEdit}
          onUpdateExpense={updateExpense}
        />
      )}
      
      {expenses.length > 0 && (
        <ExpenseList
          expenses={expenses}
          onEdit={handleEditExpense}
          onDelete={deleteExpense}
        />
      )}
    </div>
  );
}

export default App;

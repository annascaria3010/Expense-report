import React, { useState } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import ExpenseForm from './components/ExpenseForm';



const App = () => {

  const [expenses,setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses,expense]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main expenses={expenses} />} />
        <Route path="/expenseform" element={<ExpenseForm onAddExpense={handleAddExpense}/>} />
      </Routes>
    </Router>
  );
};

export default App;

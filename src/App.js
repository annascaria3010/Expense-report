import React, { useState } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { ExpenseProvider } from './components/ExpenseContext';

const App = () => {

  // const [expenses,setExpenses] = useState([]);

  // const handleAddExpense = (expense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses,expense]);
  // };
  return (
    <ExpenseProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/expenseform" element={<ExpenseForm />} />
        {/* <Route path="/expenselist" element={<ExpenseList />} /> */}
      </Routes>
    </Router>
    </ExpenseProvider>
  );
};

export default App;

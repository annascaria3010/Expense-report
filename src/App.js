import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/expenseform" element={<ExpenseForm />} />
      </Routes>
    </Router>
  );
};

export default App;

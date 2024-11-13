import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/expenseform" element={<ExpenseForm />} />
        <Route path='/expenselist' element={<ExpenseList/>} />
      </Routes>
    </Router>
  );
};

export default App;

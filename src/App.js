import React, { useState } from 'react';
import './Main.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import ExpenseForm from './components/ExpenseForm';


const App = () => {

  // const [expenses,setExpenses] = useState([]);

  // const handleAddExpense = (expense) => {
  //   setExpenses((prevExpenses) => [...prevExpenses,expense]);
  // };

  return (
    
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/expenseform" element={<ExpenseForm />} />
        {/* <Route path="/expenselist" element={<ExpenseList />} /> */}
      </Routes>
   
  );
};

export default App;

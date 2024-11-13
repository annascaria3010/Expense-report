
import React from 'react';
import './App.css';
import Title from './components/Title';
import ExpenseForm from './components/ExpenseForm';
// import Button from './components/Atoms/Button';
import { useNavigate } from "react-router-dom";


const Main = () => {
const navigate = useNavigate();
const handleButtonClick = () => {
        navigate("/expenseform"); // Navigate to Page 2
      };
  return (
    <div>
    <Title title={"O-Kane"} />
    <button onClick={handleButtonClick}>Add Expense</button>
    </div>
  )
}

export default Main;
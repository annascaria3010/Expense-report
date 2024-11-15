import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import ExpenseForm from './components/ExpenseForm';
// import Button from './components/Atoms/Button';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';


const Main = () => {
const navigate = useNavigate();

const [expenses, setExpenses] = useState([]);
const [showform, setShowform] = useState(false)

const handleButtonClick = () => {
  setShowform(prevShowForm => !prevShowForm);
};

const handleAddExpense = (expenseData) => {
  setExpenses(prevExpenses => [...prevExpenses,expenseData]);
  setShowform(false);
}


  return (
    <div className='main'>
    <div className='container'>
    <Title title={"O-Kane"} />
    <div className='amount'>
    Total Expense : $100
    <button onClick={handleButtonClick}>{showform ? "cancel" : "Add Expense"}</button>
    </div>
    {showform && <ExpenseForm onAddExpense={handleAddExpense} />}
    <ExpenseList expenses={expenses} />
    </div>
    </div>
  )
}

export default Main;
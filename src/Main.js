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

const handleButtonClick = () => {
  navigate("/expenseform");
};

  return (
    <div>
    <Title title={"O-Kane"} />
    <div className='amount'>
    Total Expense : $100
    <button onClick={handleButtonClick}>Add Expense</button>
    </div>
    <ExpenseList expenses={expenses} />
    </div>
  )
}

export default Main;
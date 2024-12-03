import React, { useContext, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseContext from './components/ExpenseContext';

const Main = () => {
const navigate = useNavigate();
const {totalExpense} = useContext(ExpenseContext);

const handleButtonClick = () => {
  navigate('/expenseform')
};
useEffect(() => {
  console.log("Updated totalExpense:", totalExpense);
}, [totalExpense]);


  return (
    <div className='main'>
      <div className='container'>

        <Title title={"O-Kane"} />

        <div className='amount'>

        <p>Total Balance : {totalExpense ? totalExpense.toFixed(2) : '0.00'}¥</p>
          <button className='addExpBtn' onClick={handleButtonClick}>Add Expense</button>
        </div>
        <ExpenseList/>

      </div>
    </div>
  )
}

export default Main;
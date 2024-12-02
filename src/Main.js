import React, { useContext } from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseContext from './components/ExpenseContext';

const Main = () => {
const navigate = useNavigate();
const {settotalExpense} = useContext(ExpenseContext);

const handleButtonClick = () => {
  navigate('/expenseform')
};

  return (
    <div className='main'>
      <div className='container'>

        <Title title={"O-Kane"} />

        <div className='amount'>

          <p>Total Balance : {settotalExpense.toFixed(2)}¥</p>
          <button className='addExpBtn' onClick={handleButtonClick}>Add Expense</button>
        </div>
        <ExpenseList/>

      </div>
    </div>
  )
}

export default Main;
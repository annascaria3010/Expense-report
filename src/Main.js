import React, { useContext } from 'react';
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

// const handleAddExpense = (expense) => {
//   setTotalExpense(prevTotal => prevTotal + expense.amount)
// }


  return (
    <div className='main'>
      <div className='container'>

        <Title title={"O-Kane"} />

        <div className='amount'>

          <p>Total Balance : ¥{totalExpense.toFixed(2)}</p>
          <button className='addExpBtn' onClick={handleButtonClick}>Add Expense</button>
          <button className='addExpBtn' onClick={handleButtonClick}>Add Income</button>
        </div>
        <ExpenseList/>

      </div>
    </div>
  )
}

export default Main;
import React, { useContext, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseContext from './components/ExpenseContext';
import CurrencyConverter from './components/CurrencyConverter';
import Split from 'react-split';

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

        <Split
    className="split"
    sizes={[50, 50]} // Initial sizes for each pane
    minSize={200} // Minimum size for each pane
    gutterSize={2} // Width of the gutter
    direction="horizontal" // Split direction: 'horizontal' or 'vertical'
>
    <div className="first-half">
        <div className="amount">
            <p>Total Balance: {totalExpense ? totalExpense.toFixed(2) : '0.00'}¥</p>
            <button className="addExpBtn" onClick={handleButtonClick}>Add Expense</button>
        </div>
        <CurrencyConverter />
    </div>
    <div className="second-half">
        <ExpenseList />
    </div>
</Split>
       

      </div>
    </div>
  )
}

export default Main;
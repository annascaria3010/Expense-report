import React, { useContext } from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseContext from './components/ExpenseContext';

const Main = () => {
const navigate = useNavigate();



const [totalExpense, expenses] = useContext(ExpenseContext);

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

          <p>Total Expense : ¥{totalExpense.toFixed(2)}</p>
          <button className='addExpBtn' onClick={handleButtonClick}>Add Expense</button>

        </div>
        <ExpenseList expenses={expenses}/>

      </div>
    </div>
  )
}

export default Main;
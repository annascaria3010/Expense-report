import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const Main = () => {
const navigate = useNavigate();

const [totalExpense, setTotalExpense] = useState(0);

const handleButtonClick = () => {
  navigate('/expenseform')
};

const handleAddExpense = (expense) => {
  setTotalExpense(prevTotal => prevTotal + expense.amount)
}


  return (
    <div className='main'>
      <div className='container'>

        <Title title={"O-Kane"} />

        <div className='amount'>

          Total Expense : ¥{totalExpense}
          <button className='addExpBtn' onClick={handleButtonClick}>Add Expense</button>

        </div>
        <ExpenseList/>

      </div>
    </div>
  )
}

export default Main;
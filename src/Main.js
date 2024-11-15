import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import { useNavigate } from "react-router-dom";
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const Main = () => {
const navigate = useNavigate();

const [totalExpense, setTotalExpense] = useState(0);
const [showForm, setShowForm] = useState(false)

const handleButtonClick = () => {
  setShowForm(prevShowForm => !prevShowForm);
  navigate('/expenseform')
};

const handleAddExpense = (expense) => {
  setTotalExpense(prevTotal => prevTotal + expense.anount)
}


  return (
    <div className='main'>
      <div className='container'>

        <Title title={"O-Kane"} />

        <div className='amount'>

          Total Expense : ¥{totalExpense}
          <button onClick={handleButtonClick}>{showForm ? "cancel" : "Add Expense"}</button>

        </div>
        {showForm && <ExpenseForm onAddExpense={handleAddExpense} />}
        

      </div>
    </div>
  )
}

export default Main;
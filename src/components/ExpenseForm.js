import React, { useContext,useState } from 'react';
import './ExpenseForm.css';
import { useNavigate } from "react-router-dom";
import ExpenseList from './ExpenseList';
import { MdArrowBack } from 'react-icons/md';
import ExpenseContext from './ExpenseContext';

function ExpenseForm({onAddExpense}) {
    const navigate = useNavigate();
    const { addExpense } = useContext(ExpenseContext);

    const [form, setForm] = useState({description:'', amount:''});
    const [expenses,setExpenses] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      };
   

    const handleAddButton = (e) => {
        e.preventDefault();
        const expenseData={
            id: Date.now(),
            description: form.description,
            amount:parseFloat(form.amount),
        };
        onAddExpense(expenseData);
        setForm({ description:'', amount:''}); 
        setExpenses(prevExpenses => [...prevExpenses,expenseData]);
        
    }   
    
    const cancel = () => {
        setForm({ description:'', amount:''});
         
    }

    const home = () => {
        navigate('/')
    }

 
       
    return(  
    <div className='exp-form'>
    <div className='form-container'>
        <div>
        <button className='homeBtn'  onClick={home}><MdArrowBack /></button>
        <h1 className='form-heading'>Expense Form</h1>
        </div>
        <form className='form' onSubmit={handleAddButton}>
            <input 
                type='text'
                name="description"
                value={form.description}
                placeholder='Expense Description'
                onChange={handleChange}
                className='form-input'
                required
            />
            <input 
                type='number'
                name="amount"
                value={form.amount}
                placeholder='Amount in Yen'
                onChange={handleChange}
                className='form-input'
                required
            />
            <div className='btns'>
            <button type="submit" className='form-button add-button'>Add</button>
            <button type="button" onClick={cancel} className='form-button cancel-button'>Cancel</button>
            </div>
        </form>
        <ExpenseList expenses={expenses}/>
        </div>
    </div>
);
}

export default ExpenseForm;

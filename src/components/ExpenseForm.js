import React, { useState } from 'react';
import './ExpenseForm.css';
import { useNavigate } from "react-router-dom";

function ExpenseForm({onAddExpense}) {
    const navigate = useNavigate();

    const [form, setForm] = useState({description:'', amount:''});
    
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
        
    }

 
       
    return(  
    <div className='exp-form'>
        <h1 className='form-heading'>Expense Form</h1>
        <form className='form' onSubmit={handleAddButton}>
            <input 
                type='text'
                name="description"
                value={form.description}
                placeholder='Expense Description'
                onChange={handleChange}
                required
            />
            <input 
                type='number'
                name="amount"
                value={form.amount}
                placeholder='Amount in Yen'
                onChange={handleChange}
                required
            />

            <button type= "submit">Add</button>
            
        </form>
    </div>
);
}

export default ExpenseForm;

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
    const handleCancelButton = () => {
        navigate("/");
      };

    const handleAddButton = (e) => {
        
        const expenseData={
            id: Date.now(),
            description: form.description,
            amount:parseFloat(form.amount),
        };
        onAddExpense(expenseData);
        setForm({ description:'', amount:''});
        
    }
       
    return(  
    <div>
        <h1>Expense Form</h1>
        <form onSubmit={handleAddButton}>
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
            <button onClick={handleCancelButton}>Cancel</button>
        </form>
    </div>
);
}

export default ExpenseForm;

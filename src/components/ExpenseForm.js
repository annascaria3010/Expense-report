import React, { useState } from 'react';
import './ExpenseForm.css';
import { useNavigate } from "react-router-dom";

function ExpenseForm() {
    const navigate = useNavigate();

    const [text,setText] = useState('');
    const [number,setNumber] = useState('');
    
    const handleCancelButton = () => {
        navigate("/");
      };

    const handleAddButton = (event) => {
        setText(event.target.value);
        setNumber(event.target.value);
        navigate("/");
      };
    return( 
    <div>
        <h1>Expense Form</h1>
        <div>
            <input 
                type='text'
                value={text}
                placeholder='Reason'>

            </input>
            <input 
                type='number'
                value={number}
                placeholder='Amount in Yen'>
       
            </input>
        </div>
        <button onClick={handleAddButton}>Add</button>
        <button onClick={handleCancelButton}>Cancel</button>
    </div>
);
}

export default ExpenseForm;

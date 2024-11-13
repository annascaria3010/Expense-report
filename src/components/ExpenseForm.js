import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [text,setText] = useState('');
    const [number,setNumber] = useState('');
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
        <button>Add</button>
        <button>Cancel</button>
    </div>
);
}

export default ExpenseForm;

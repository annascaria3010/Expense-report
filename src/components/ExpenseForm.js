import React, { useContext,useEffect,useState } from 'react';
import './ExpenseForm.css';
import { useNavigate } from "react-router-dom";
import ExpenseList from './ExpenseList';
import { MdArrowBack } from 'react-icons/md';
import ExpenseContext from './ExpenseContext';
import Select from 'react-select';


function ExpenseForm() {
    const navigate = useNavigate();
    const { addExpense, updateExpenses, expenses, setEditingExpense, editingExpense } = useContext(ExpenseContext);

    const [form, setForm] = useState({description:'', amount:''});
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (editingExpense) {
            setForm ({ 
                description: editingExpense.description,
                amount: editingExpense.amount,
            });
            setSelectedOption({ value: editingExpense.category, label: editingExpense.category });
        }
    },[editingExpense]);

    const options = [
        { value: 'expense', label: 'Expense' },
        { value: 'income', label: 'Income' },
        
      ];

      
        const handledrop = (selectedOption) => {
            setSelectedOption(selectedOption);
        };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      };
   

    const handleAddButton = (e) => {
        e.preventDefault();
        const expenseData={
            ...editingExpense,
            description: form.description,
            amount: parseFloat(form.amount),
            category: selectedOption?.value || '',
          };
      
          if (editingExpense) {
            updateExpenses(expenseData);
            setEditingExpense(null);
          } else {
            addExpense({ ...expenseData, id: Date.now() });
          }
      
          setForm({ description: '', amount: '' }); 
          setSelectedOption(null);
        
    }   
    
    const cancel = () => {
        setForm({ dropdown:'',description:'', amount:''});
        setSelectedOption(null);
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
            
            <Select
                options={options}
                value={selectedOption}
                onChange={handledrop}
                placeholder="Select Category"
                className='form-opt select-dropdown'
                required
            />

            <input 
                type='text'
                name="description"
                value={form.description}
                placeholder='Description'
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
            <button type="submit" className='form-button add-button'>{editingExpense ? 'Save' : 'Add'}</button>
            <button type="button" onClick={cancel} className='form-button cancel-button'>Cancel</button>
            </div>
        </form>
        <ExpenseList expenses={expenses}/>
        </div>
    </div>
);
}

export default ExpenseForm;

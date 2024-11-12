import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Button from './components/Atoms/Button';

class App extends Component {
  render() {
  return (
    <div>
    <Title title={"O-Kane"}/>
    <Button btn={"Add Expense"} />
    </div>
  );
}
}

export default App;

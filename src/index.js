import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ExpenseProvider } from './components/ExpenseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExpenseProvider>
  </React.StrictMode>
);

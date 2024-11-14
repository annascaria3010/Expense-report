import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Button.css';

function Button({ btn, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    console.log("Button clicked");
    toggleModal();
    onClick();  // Make sure onClick is a valid function
  };

  return (
    <button className='addexpbtn' onClick={handleClick}>{btn}</button>
  );
}
export default Button

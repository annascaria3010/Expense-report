import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Button ({btn}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

  return (
    <button onClick={toggleModal}>{btn}</button>
  )
}

export default Button
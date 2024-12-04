import React from 'react'

const CurrencyConverter = () => {
  return (
    <div>
       <h2 className='converter-title'>Currency Converter</h2>
        <form className='converter-form'>
            <div className='form-group'>
                <label className='form-label'>Enter Amount</label>
                <input type='number' className='form-inputs' required /> 
            </div>

            <div className='form-group'>
                <div className='form-section'>
                    <label className='form-label'>From</label>
                    <div className='currency-select'>
                        <img src='' alt='Flag'/>
                        <select className='currency-dropdown'>
                            <option value={USD}>USD</option>
                            <option value={INR}>INR</option>
                            <option value={NPR>NPR</option>
                        </select> 
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CurrencyConverter
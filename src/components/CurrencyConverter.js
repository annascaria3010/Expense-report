import React from 'react'

const CurrencyConverter = () => {
  return (
    <div>
       <h2 className='converter-title'>Currency Converter</h2>
        <form className='converter-form'>
            <div className='form-group'>
                <label className='form-label'>Enter Amount</label>
                <input type='number' className='form-inputs' >

                </input>
            </div>
        </form>
    </div>
  )
}

export default CurrencyConverter
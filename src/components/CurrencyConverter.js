import React from 'react'
import './CurrencyConverter.css' 

const CurrencyConverter = () => {
  return (
    <div className='currency-converter'>
       <h2 className='converter-title'>Currency Converter</h2>
        <form className='converter-form'>
            <div className='form-group'>
                <label className='form-label'>Enter Amount</label>
                <input type='number' className='form-inputs' required /> 
            </div>

            <div className='form-group form-currency-group'>
                <div className='form-section'>
                    <label className='form-label'>From</label>
                    <div className='currency-select'>
                        <img src='https://flagsapi.com/JP/flat/64.png' alt='Flag'/>
                        <select className='currency-dropdown'>
                            <option value='JPY' selected>JPY</option>
                            <option value='INR'>INR</option>
                            <option value='NPR'>NPR</option>
                        </select> 
                    </div>
                </div>

                <div className='swap-icon'>
                <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                        fill="#fff"
                    />
                </svg>
                </div>

                <div className='form-section'>
                    <label className='form-label'>To</label>
                    <div className='currency-select'>
                        <img src='https://flagsapi.com/IN/flat/64.png' alt='Flag'/>
                        <select className='currency-dropdown'>
                            <option value='JPY'>JPY</option>
                            <option value='INR' selected>INR</option>
                            <option value='NPR'>NPR</option>
                        </select> 
                    </div>
                </div>
            </div>
                <button type='submit' className='submit-button'>Get Exchange Rate</button>
                <p className='exchange-rate-result'>1000 YEN = 563.34 INR</p>
        </form>
    </div>
  )
}

export default CurrencyConverter
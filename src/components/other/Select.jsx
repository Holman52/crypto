import React from 'react'
import CODES from '../../utils/constaint'
import './Select.css'
function Select(props) {
  return (
    <select
        id="currency-select"
        value={props.value}
        onChange={props.onChange}
        className='select-dropdown'
      >
        <option value=""></option>
        {CODES.map((currency) => (
          <option key={currency.value} value={currency.value}>
            {currency.value} 
          </option>
        ))}
      </select>
  )
}

export default Select
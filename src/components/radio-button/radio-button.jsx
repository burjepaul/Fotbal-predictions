import React, { useState } from 'react'
import "./radio-button.styles.scss"

function RadioButtons({onButtonChange}) {
    const [selectedOption, setSelectedOption] = useState('All');

    function handleChange(event) {
      setSelectedOption(event.target.value);
      onButtonChange(event.target.value)
    }

  return (
    <div className='radio-buttons'>
      <label>
          All Games
        <input type="radio" value="All" checked={selectedOption === 'All'} onChange={handleChange} />
      </label>
      <br />
      <label>
        On results
        <input type="radio" value="final_result" checked={selectedOption === 'final_result'} onChange={handleChange} />
      </label>
      <br />
      <label>
      On goals
        <input type="radio" value="goals" checked={selectedOption === 'goals'} onChange={handleChange} />
      </label>
    </div>
  )
}

export default RadioButtons
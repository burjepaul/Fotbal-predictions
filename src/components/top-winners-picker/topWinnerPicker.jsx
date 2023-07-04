import React from "react";
import "./topWinnerPicker.style.scss"

const TopWinnerPicker = ({pickerOptions, pickerChangeOption}) => {
    const onOptionChangeHandler = (e) => {
        pickerChangeOption(e.target.value)
    }

    return(
        <select onChange={onOptionChangeHandler} className="picker">
        {pickerOptions.map((option, index) => {
            return <option key={index} >
                        {option}
                    </option>
            })}
        </select>
    )
}

export default TopWinnerPicker
import React from "react"
import './Input.css'

function Input(props) {
    
    return(
        <input
            type={props.type}
            disabled={props.disabled}
            value={props.value}
            min={props.min}
            placeholder={props.placeholder}
            className={`${"input"} ${props.className}`}
        >

        </input>
    )
}
export default Input
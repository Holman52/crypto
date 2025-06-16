import React from "react"
import './Input.css'

function Input(props) {
    
    return(
        <input
            type='number'
            value={props.value}
            placeholder={props.placeholder}
            className={`${"input"} ${props.className}`}
            onChange={props.onChange}
        >

        </input>
    )
}
export default Input
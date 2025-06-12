import React from "react"
import Input from "./other/Input"
import './Form.css'
import Select from "./other/Select"
function Form() {
    return(
            <div className="form-client">
                <div className="form-client__input">
                    <Input type='number' placeholder='Введите количетво валюты' min="1" ></Input>
                    <Select/>
                </div>
                <div className="form-client__output">
                    <Input ></Input>
                    <Select/>
                </div>
            </div>
        )
    }
export default Form
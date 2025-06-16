import React from "react"
import Input from "./other/Input"
import './Form.css'
import Select from "./other/Select"
import Button from "./other/Button"
function Form(
    {onValueInput,targetValue,ValueInput,BaseCodeHandler,TargetCodeHandle,targetCode, baseCode}) {
    return(
            <div className="form-client">
                <div className="form-client__flex">
                    <Input  placeholder='Введите количетво валюты'  onChange={onValueInput} value={ValueInput}></Input>
                    <Select onChange={BaseCodeHandler} value={baseCode}/>
                </div>
                <div className="form-client__flex">
                    <Input value={targetValue} readOnly></Input>
                    <Select onChange={TargetCodeHandle} value={targetCode}/>
                </div>
                <Button className='kurs'>Посмотреть курс</Button>
            </div>
        )
    }
export default Form
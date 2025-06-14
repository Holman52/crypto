import React from "react"
import Input from "./other/Input"
import './Form.css'
import Select from "./other/Select"
import Button from "./other/Button"
function Form(onValueInput,TargetValue,ValueInput,BaseCodeHandler,TargetCodeHandle,targetCode, baseCode) {

    return(
            <div className="form-client">
                <div className="form-client__flex">
                    <Input type='number' placeholder='Введите количетво валюты' min="1" onChange={onValueInput} value={ValueInput}></Input>
                    <Select onChange={BaseCodeHandler} value={baseCode}/>
                </div>
                <div className="form-client__flex">
                    <Input value={TargetValue} ></Input>
                    <Select onChange={TargetCodeHandle} value={targetCode}/>
                </div>
                <Button className='kurs'>Посмотреть курс</Button>
            </div>
        )
    }
export default Form
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
                    <Input value={ValueInput} onChange={onValueInput} placeholder='Введите количетво валюты' ></Input>
                    <Select onChange={BaseCodeHandler} value={baseCode}/>
                </div>
                <div className="form-client__flex">
                    <Input value={targetValue} readOnly={true}></Input>
                    <Select onChange={TargetCodeHandle} value={targetCode}/>
                </div>
                {/* <Button className='kurs'>Посмотреть курс</Button> */}
            </div>
        )
    }
export default Form
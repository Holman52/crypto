import React, { useState } from "react";
import Form from "./form";
import './Convert.css'
import { DEFAULT_BASE_CODE,DEFAULT_BASE_VALUE,DEFAULT_TARGET_CODE } from "../utils/constaint";
import useConvertRate from "../utils/useConvertRate";

function Convert() {
    const [valueInput, setValueInput] = useState(DEFAULT_BASE_VALUE)
    const [baseCode,setBaseCode] = useState(DEFAULT_BASE_CODE)
    const [targetCode, setTargetCode] = useState(DEFAULT_TARGET_CODE)
    const [targetValue, setTargetValue] = useState(0)

    const {convertRate} = useConvertRate({
        baseCode,
        targetCode
})
    console.log(convertRate)
// export const DEFAULT_BASE_VALUE = 1;
// export const DEFAULT_TARGET_VALUE = 0;
// export const DEFAULT_TO_FIXED = 2;
// export const DEFAULT_BASE_CODE = "USD";
// export const DEFAULT_TARGET_CODE = "RUB";
    const onValueInputChange = (e) =>{
        const value = Number(e.target.value)
        setValueInput(value)
        const targetValue = value && convertRate ? 
        (value*convertRate).toFixed(2) : null;
        setTargetValue(targetValue)
        console.log(targetValue)
    }
    const onBaseCodeHandler = (e) =>{
        setBaseCode(e.target.Value)
    }
    const onTargetCodeHandler= (e) =>{
        setTargetCode(e.target.value)
    }
    console.log(valueInput)
    console.log(baseCode)
    console.log(targetCode)
    return(
        <div className='main-block'>
            <div className='main-block__content'>
                <h1 className='content-header'>Выбирай валюту и смотри курс!</h1>
                <Form 
                    onValueInput={onValueInputChange}
                    TargetValue={targetValue}
                    ValueInput={valueInput}
                    BaseCodeHandler={onBaseCodeHandler}
                    TargetCodeHandle={onTargetCodeHandler}
                    baseCode={baseCode}
                    targetCode={targetCode}
                />
            </div>
        </div>
    )
}
export default Convert
import React, { useState, useEffect} from "react";
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
     useEffect(() => {

    if (valueInput && convertRate) {
      const result = (valueInput * convertRate).toFixed(2);
      setTargetValue(result);
    } else {
      setTargetValue(0);
    }
  }, [valueInput, convertRate]);

  const onValueInputChange = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };
    const onBaseCodeHandler = (e) =>{
        setBaseCode(e.target.value)
    }
    const onTargetCodeHandler= (e) =>{
        setTargetCode(e.target.value)
    }

    return(
        <div className='main-block'>
            <div className='main-block__content'>
                <h1 className='content-header'>Выбирай валюту и смотри курс!</h1>
                <Form 
                    onValueInput={onValueInputChange}
                    targetValue={targetValue}
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
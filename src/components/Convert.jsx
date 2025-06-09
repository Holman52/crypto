import React from "react";
import Form from "./form";
import './Convert.css'
import Button from "./other/Button";
function Convert() {

    return(
        <div className='main-block'>
            <div className='main-block__content'>
                <h1 className='content-header'>Выбирай валюту и смотри курс!</h1>
                <Form/>
                <Button className='kurs'>Посмотреть курс</Button>
            </div>
        </div>
    )
}
export default Convert
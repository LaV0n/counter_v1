import React, {ChangeEvent, useState} from 'react';
import './../App.css';
import Counter from "./Counter";

type SettingType ={
    startNumber: number
    maxNumber:number
}

function Setting(props:SettingType) {

    let startNumber:number;
    let maxNumber=8;

    const addButton = () => {
         <Counter startNumber={startNumber} maxNumber={maxNumber}/>;
    }

     let startNumberHandler =(n:ChangeEvent<HTMLInputElement>)=>{
        startNumber=n.currentTarget.valueAsNumber;
     }

    return (
        <div className="block">
            <span>start number</span><input type="number" value={startNumber} onChange={startNumberHandler}/>
            <span>max number</span><input type="number" value={maxNumber}/>
            <div className="buttons">
                <button disabled={false}
                        className="button"
                        onClick={addButton}
                >set
                </button>
            </div>
        </div>
    );
}

export default Setting;

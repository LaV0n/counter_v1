import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting";
import {saveState} from "./utils/localStorage-util";
import counter from './store/counter'
import {observer} from "mobx-react-lite";

export type CounterStateType = {
    startNumber: number
    maxNumber: number
    counter: number
    error: string | null
    settingOn: boolean
}


const  App= observer(()=> {


    if (counter.startNumber >= counter.maxNumber
        || counter.startNumber < 0
        || isNaN(counter.startNumber)
        || isNaN(counter.maxNumber)) {
        counter.error = "incorrect entry"
    }

    const setStartNumberHandler = (number: number) => {
        counter.setStartNumber(number)
    }

    const setMaxNumberHandler = (number: number) => {
        counter.setMaxNumber(number)
    }

    const doOneStepCounterHandler = () => {
        counter.stepCounter()
    }
    const resetCounterHandler = () => {
        counter.resetCounter()
    }
    const setSettingHandler = () => {
        counter.setSetting();
        saveState( counter.startNumber, counter.maxNumber)
    }

    return (
        <div className="App">
            <Setting startNumber={counter.startNumber}
                     maxNumber={counter.maxNumber}
                     setStartNumber={setStartNumberHandler}
                     setMaxNumber={setMaxNumberHandler}
                     setSetting={setSettingHandler}
                     error={counter.error}
            />
            <Counter startNumber={counter.startNumber}
                     maxNumber={counter.maxNumber}
                     counter={counter.counter}
                     resetCounter={resetCounterHandler}
                     doOneStepCounter={doOneStepCounterHandler}
                     error={counter.error}
                     settingOn={counter.settingOn}
            />
        </div>
    );
}
)
export default App;

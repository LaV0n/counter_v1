import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    resetCounter,
    setMaxNumber,
    setSetting,
    setStartNumber,
    stepCounter
} from "./state/counter-reducer";
import {saveState} from "./utils/localStorage-util";

export type CounterStateType = {
    startNumber: number
    maxNumber: number
    counter: number
    error: string | null
    settingOn: boolean
}


function App() {
    let counterState = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    let dispatch = useDispatch()

    counterState.error = null;
    if (counterState.startNumber >= counterState.maxNumber
        || counterState.startNumber < 0
        || isNaN(counterState.startNumber)
        || isNaN(counterState.maxNumber)) {
        counterState.error = "incorrect entry"
    }

    const setStartNumberHandler = (number: number) => {
        dispatch(setStartNumber(number))
    }

    const setMaxNumberHandler = (number: number) => {
        dispatch(setMaxNumber(number))
    }

    const doOneStepCounterHandler = () => {
        dispatch(stepCounter())
    }
    const resetCounterHandler = () => {
        dispatch(resetCounter())
    }
    const setSettingHandler = () => {
        dispatch(setSetting());
        saveState( counterState.startNumber, counterState.maxNumber)
    }

    return (
        <div className="App">
            <Setting startNumber={counterState.startNumber}
                     maxNumber={counterState.maxNumber}
                     setStartNumber={setStartNumberHandler}
                     setMaxNumber={setMaxNumberHandler}
                     setSetting={setSettingHandler}
                     error={counterState.error}
            />
            <Counter startNumber={counterState.startNumber}
                     maxNumber={counterState.maxNumber}
                     counter={counterState.counter}
                     resetCounter={resetCounterHandler}
                     doOneStepCounter={doOneStepCounterHandler}
                     error={counterState.error}
                     settingOn={counterState.settingOn}
            />
        </div>
    );
}

export default App;

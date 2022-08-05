import React from 'react';
import './../App.css';

type CounterType = {
    startNumber: number
    maxNumber: number
    counter: number
    doOneStepCounter: () => void
    resetCounter: () => void
    error: string | null
    settingOn:boolean
}

export function Counter (props: CounterType) {

    const doOneStepCounterHandler = () => {
        props.doOneStepCounter()
    }
    const resetCounterHandler = () => {
        props.resetCounter()
    }

    return (
        <div className="block">
            <div
                className={props.error
                    ? "counter incorrect-message"
                    : (props.counter !== props.maxNumber ? "counter" : " counter last-number")}>
                {props.error ? props.error : (props.settingOn ? 'setting': props.counter)}
            </div>
            <div className="buttons">
                <button disabled={props.error || props.settingOn ? true : props.counter >= props.maxNumber}
                        className="button"
                        onClick={doOneStepCounterHandler}
                >inc
                </button>
                <button disabled={props.error || props.settingOn ? true : props.counter === props.startNumber}
                        className="button"
                        onClick={resetCounterHandler}
                >reset
                </button>
            </div>
        </div>
    );
}



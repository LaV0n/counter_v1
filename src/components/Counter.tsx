import React, {useState} from 'react';
import './../App.css';

type CounterType ={
    startNumber: number
    maxNumber:number
}

function Counter(props:CounterType) {

    let [counter, setCounter] = useState<number>(props.startNumber);

    const addButton = () => {
        setCounter(counter+1);
    }
    const resetButton = () => {
      setCounter(props.startNumber);
    }

    return (
            <div className="block">
                <div className={counter !==props.maxNumber? "counter": " counter number_5" } >{counter}</div>
                <div className="buttons">
                    <button disabled={counter>=props.maxNumber}
                            className="button"
                            onClick={addButton}
                    >inc
                    </button>
                    <button disabled={counter===props.startNumber}
                            className="button"
                            onClick={resetButton}
                    >reset</button>
                </div>
            </div>
    );
}

export default Counter;

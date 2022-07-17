import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setting from "./components/Setting";


function App() {
    let start = localStorage.getItem("startNumber");
    let max = localStorage.getItem("maxNumber");

    let [startNumber, setStartNumber] = useState<number>(start !== null ? JSON.parse(start) : 0);
    let [maxNumber, setMaxNumber] = useState<number>(max !== null ? JSON.parse(max) : 0);

    let [counter, setCounter] = useState<number>(startNumber);

    let error: string | null = null;

    if (startNumber >= maxNumber || startNumber < 0) {
        error = "incorrect entry"
    }

    const setStart = (number: number) => {
        setStartNumber(number);
    }
    const setMax = (number: number) => {
        setMaxNumber(number);
    }
    const addButton = () => {
        setCounter(counter + 1);
    }
    const resetButton = () => {
        setCounter(startNumber);
    }
    const setButton = () => {
        resetButton();
        localStorage.setItem("startNumber", JSON.stringify(startNumber));
        localStorage.setItem("maxNumber", JSON.stringify(maxNumber));
    }

    return (
        <div className="App">
            <Setting startNumber={startNumber} maxNumber={maxNumber} setStart={setStart} setMax={setMax}
                     setButton={setButton}
                     error={error}
            />
            <Counter startNumber={startNumber} maxNumber={maxNumber} counter={counter} resetButton={resetButton}
                     addButton={addButton}
                     error={error}
            />
        </div>
    );
}

export default App;

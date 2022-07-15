import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setting from "./components/Setting";


function App() {

    let [startNumber,setStartNumber]=useState(0);
    let [maxNumber,setMaxNumber]=useState(5);

    let [counter, setCounter] = useState<number>(startNumber);

    const setStart =(number:number)=>{
        setStartNumber(number);
    }
    const setMax =(number:number)=>{
        setMaxNumber(number);
    }
    const addButton =()=>{
        setCounter(counter+1);
    }
    const resetButton =()=>{
        setCounter(startNumber);
    }

    return (
        <div className="App">
            <Setting startNumber = {startNumber} maxNumber={maxNumber} setStart ={setStart} setMax ={setMax} setButton ={resetButton}/>
            <Counter startNumber = {startNumber} maxNumber={maxNumber} counter ={counter} resetButton={resetButton} addButton={addButton}/>
        </div>
    );
}

export default App;

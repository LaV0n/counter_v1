import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Setting from "./components/Setting";

function App() {

    let start = 0;
    let max = 5;

    return (
        <div className="App">
            <Setting startNumber ={start} maxNumber = {max}/>
            <Counter startNumber ={start} maxNumber = {max}/>
        </div>
    );
}

export default App;

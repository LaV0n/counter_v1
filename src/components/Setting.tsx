import React, {ChangeEvent} from 'react';
import './../App.css';

type SettingType = {
    startNumber: number
    maxNumber: number
    setStartNumber: (value: number) => void
    setMaxNumber: (value: number) => void
    setSetting: () => void
    error: string | null
}

export function Setting (props: SettingType) {

    const setSettingHandler = () => {
        props.setSetting()
    }

    const setStartNumberHandler = (n: ChangeEvent<HTMLInputElement>) => {
        props.setStartNumber(n.currentTarget.valueAsNumber);
    }
    const setMaxNumberHandler = (n: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNumber(n.currentTarget.valueAsNumber);
    }

    return (
        <div className="block">
            <div className="input-setting">
                <div>
                    <span>start number: </span>
                    <input type="number" value={props.startNumber} onChange={setStartNumberHandler}
                           className={props.error ? "input-error" : "input-correct"}/>
                </div>
                <div>
                    <span>max number: </span>
                    <input type="number" value={props.maxNumber} onChange={setMaxNumberHandler}
                           className={props.error ? "input-error" : "input-correct"}/>
                </div>
            </div>
            <div className="buttons">
                <button disabled={!!props.error}
                        className="button"
                        onClick={setSettingHandler}
                >set
                </button>
            </div>
        </div>
    );
}



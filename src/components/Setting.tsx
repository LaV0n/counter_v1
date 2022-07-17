import React, {ChangeEvent} from 'react';
import './../App.css';

type SettingType = {
    startNumber: number
    maxNumber: number
    setStart: (value: number) => void
    setMax: (value: number) => void
    setButton: () => void
    error: string | null
}

function Setting(props: SettingType) {
    const setButton = () => {
        props.setButton()
    }

    let startNumberHandler = (n: ChangeEvent<HTMLInputElement>) => {
        props.setStart(n.currentTarget.valueAsNumber);
    }
    let maxNumberHandler = (n: ChangeEvent<HTMLInputElement>) => {
        props.setMax(n.currentTarget.valueAsNumber);
    }

    return (
        <div className="block">
            <div className="input-setting">
                <div>
                    <span>start number: </span>
                    <input type="number" value={props.startNumber} onChange={startNumberHandler}
                           className={props.error ? "input-error" : "input-correct"}/>
                </div>
                <div>
                    <span>max number: </span>
                    <input type="number" value={props.maxNumber} onChange={maxNumberHandler}
                           className={props.error ? "input-error" : "input-correct"}/>
                </div>
            </div>
            <div className="buttons">
                <button disabled={!!props.error}
                        className="button"
                        onClick={setButton}
                >set
                </button>
            </div>
        </div>
    );
}

export default Setting;

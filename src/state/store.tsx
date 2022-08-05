import {combineReducers, legacy_createStore} from "redux";
import {
    CounterReducer, ResetCounterACType, SetMaxNumberACType, SetSettingACType, SetStartNumberACType, StepCounterACType
} from "./counter-reducer";

export type ActionsType =
    SetSettingACType |
    SetStartNumberACType |
    SetMaxNumberACType |
    StepCounterACType |
    ResetCounterACType


const rootReducer = combineReducers({
       counter: CounterReducer
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore

window.store = store;

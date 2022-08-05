import {ActionsType} from "./store";
import {CounterStateType} from "../App";

export type StepCounterACType ={
    type: 'STEP_COUNTER'
}
export type ResetCounterACType ={
    type: 'RESET_COUNTER'
}
export type SetSettingACType = {
    type: 'SET_SETTING'
}
export type SetStartNumberACType = {
    type: 'SET_START_NUMBER'
    n: number
}
export type SetMaxNumberACType = {
    type: 'SET_MAX_NUMBER'
    n: number
}


 let initialState: CounterStateType = {
    startNumber:0,
    maxNumber:5,
    counter:0,
    error: null,
    settingOn:false
}

export const CounterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'STEP_COUNTER': {
            return {...state,counter:state.counter +1}
        }
        case 'RESET_COUNTER': {
            return {...state,counter: state.startNumber}
        }
        case 'SET_SETTING': {
            return {...state,settingOn: false,counter: state.startNumber}
        }
        case 'SET_START_NUMBER': {
            return {...state, startNumber: action.n , settingOn:true}
        }
        case 'SET_MAX_NUMBER': {
            return {...state,maxNumber:action.n, settingOn:true}
        }
        default:
            return state
    }
}

export const stepCounter = (): StepCounterACType => {
    return {type: 'STEP_COUNTER'}
}
export const resetCounter = (): ResetCounterACType => {
    return {type: 'RESET_COUNTER'}
}
export const setSetting = (): SetSettingACType => {
    return {type: 'SET_SETTING'}
}
export const setStartNumber = (n: number): SetStartNumberACType => {
    return {type: 'SET_START_NUMBER', n: n}
}
export const setMaxNumber = (n: number): SetMaxNumberACType => {
    return {type: 'SET_MAX_NUMBER', n: n}
}

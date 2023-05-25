import {makeAutoObservable} from "mobx";

class Counter{
    startNumber=0
    maxNumber=5
    counter=0
    error: null | string= null
    settingOn=false
    constructor() {
        makeAutoObservable(this)
    }
    stepCounter(){
        this.counter=this.counter+1
    }
    resetCounter(){
        this.counter=this.startNumber
    }
    setSetting(){
        this.settingOn=false
        this.resetCounter()
    }
    setStartNumber(number:number){
        this.setError()
        this.startNumber=number
        this.settingOn=true
    }
    setMaxNumber(number:number){
        this.setError()
        this.maxNumber=number
        this.settingOn=true
    }
    setError(){
        this.error=null
    }
}
export default new Counter()

export const loadState =() => {
    try {
        const serialState = localStorage.getItem('counter-state');
      if (serialState){
          return JSON.parse(serialState)
      }
    } catch (err) {
        return undefined
    }
}
export const saveState = (startNumber:number,maxNumber:number) =>{
    try {
        const serialState = JSON.stringify({counter: {startNumber: startNumber, maxNumber: maxNumber, counter: startNumber, error: null, settingOn: false}});
        localStorage.setItem('counter-state',serialState)
    } catch {

    }
}
import { useReducer } from 'react'

const defaultState = {
    value: '',
    isValueTouched: false,

}

const inputReducer = (state, action) => {
    if (action.type === "CHANGE") {
        return {
            value: action.val,
            isValueTouched: state.isValueTouched,
        }
    }
    if(action.type === "BLUR"){
        return {
            value: state.value,
            isValueTouched: true,
        }
    }
    if(action.type === "RESET"){
        return defaultState
    }
    return defaultState
}

const useInput = (validate) => {
    const [inputState, dispatchInputState] = useReducer(inputReducer, defaultState)
    const isValid = validate(inputState.value)
    const error =inputState.isValueTouched && !isValid

    const inputChangeHandler = event => {
        dispatchInputState({ type: "CHANGE", val: event.target.value})
    }
    const inputBlurHandler = event => {
        dispatchInputState({ type: "BLUR"})
    }
    const reset = () =>{
        dispatchInputState({ type: "RESET"})
    }
    return {
    value: inputState.value,
    touched: inputState.isValueTouched,
    isValid,
    error,
    reset,
    inputChangeHandler,
    inputBlurHandler

}
}

export default useInput
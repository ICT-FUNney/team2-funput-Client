import { ADD_NUMBER, DECREASE_NUMBER, GET_EXAMPLE_REQUEST, GET_EXAMPLE_SUCCESS, GET_EXAMPLE_FAILED } from "./ExampleActionType";

export const addNumber = (number) => ({
    type: ADD_NUMBER,
    number // number: numberと同じ意味
})

export const decreaseNumber = (number) => ({
    type: DECREASE_NUMBER,
    number
})

export const getExampleRequest = () => ({
    type: GET_EXAMPLE_REQUEST
})

export const getExampleSuccess = (data) => ({
    type: GET_EXAMPLE_SUCCESS,
    data
})

export const getExampleFailed = () => ({
    type: GET_EXAMPLE_FAILED
})
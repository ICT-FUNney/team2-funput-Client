import { ADD_NUMBER, DECREASE_NUMBER } from "./ExampleActionType";

export const addNumber = (number) => ({
    type: ADD_NUMBER,
    number // number: numberと同じ意味
})

export const decreaseNumber = (number) => ({
    type: DECREASE_NUMBER,
    number
})
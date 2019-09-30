import { ADD_NUMBER } from "./ExampleActionType";


export const addNumber = (number) => ({
    type: ADD_NUMBER,
    number // number: numberと同じ意味
})
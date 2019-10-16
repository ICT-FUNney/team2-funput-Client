import { ADD_NUMBER, DECREASE_NUMBER,ADD_WORDS } from "./ExampleActionType";

export const addNumber = () => ({
    type: ADD_NUMBER,
    // number : number // number: numberと同じ意味
})

export const decreaseNumber = (number) => ({
    type: DECREASE_NUMBER,
    number
})

export const addWords = (words)=>({
  type: ADD_WORDS,
  words: words
})

import React from 'react';
import { ADD_NUMBER, DECREASE_NUMBER, ADD_WORDS } from '../actions/Example/ExampleActionType';
//いらない

class Example extends React.Component {
    handleClickAddButton = () => {
        this.props.addNumber()
    }
    handleClickDecreaseButton = () => {
        this.props.decreseNumber(0)
    }
    handleClickAddWords= () => {
      const words = document.getElementById('words');
      const word = words.value;
      this.props.addWords(word);
      words.value='';
    }

    wordsHandle (){

    }

    render() {
        return(
            <div>
                <div>{this.props.example.number}</div>
                <button onClick={this.handleClickAddButton}>+</button>
                <button onClick={this.handleClickDecreaseButton}>-</button>
                <input type="text" id="words"/>
                <button onClick={this.handleClickAddWords}>value="保存する"</button>
                {this.props.example.words.map((word ,index) =>{
                  return <div key={index}>{word}</div>
                })}
            </div>
        )
    }
}

export default Example;

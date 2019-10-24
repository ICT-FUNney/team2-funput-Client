import React from 'react';
import { ADD_NUMBER, DECREASE_NUMBER } from '../actions/Example/ExampleActionType';

class Example extends React.Component {
    handleClickAddButton = () => {
        this.props.addNumber(ADD_NUMBER, 0)
    }
    handleClickDecreaseButton = () => {
        this.props.decreseNumber(DECREASE_NUMBER, 0)
    }

    render() {
        return(
            <div>
                <div>{this.props.example.number}</div>
                <button onClick={this.handleClickAddButton}>+</button>
                <button onClick={this.handleClickDecreaseButton}>-</button>
            </div>
        )
    }
}

export default Example;

import React from 'react';

class Example extends React.Component {

    componentDidMount() {
        this.props.getExampleRequest()
    }

    handleClickAddButton = () => {
        this.props.addNumber(0)
    }
    handleClickDecreaseButton = () => {
        this.props.decreseNumber(0)
    }

    render() {
        return(
            <div>
                <div>{this.props.example.number}</div>
                <button onClick={this.handleClickAddButton}>+</button>
                <button onClick={this.handleClickDecreaseButton}>-</button>
                <div>{this.props.example.exampleData.hoge}</div>
            </div>
        )
    }
}

export default Example;

import React from 'react';

class Example extends React.Component {

  componentDidMount() {
    this.props.getExampleRequest()
    this.props.getTextRequest()
    this.props.createUser()
  }

  handleClickAddButton = () => {
      this.props.addNumber(0)
  }
  handleClickDecreaseButton = () => {
      this.props.decreseNumber(0)
  }

  handleClickSubmitt = (e) => {
    e.preventDefault();
    const text = document.getElementById("text");
    this.props.getTextAdd(text.value);
    text.value = "";
  }

  render() {
    return(
      <div>
        <div>{this.props.example.number}</div>
        <button onClick={this.handleClickAddButton}>+</button>
        <button onClick={this.handleClickDecreaseButton}>-</button>
        <div>{this.props.example.exampleData.fuga}</div>
        <div>{this.props.example.testText.length && this.props.example.testText[0].textWords1}</div>
        <form>
          <input id="text"/>
          <button type="submit" onClick={this.handleClickSubmitt}>送信</button>
        </form>
        <ol>
          {
            this.props.example.testText.length && (this.props.example.testText.map((text,index)=>(
              <li key = {index}>{text.length && text}</li>
            )))

          }
        </ol>
      </div>
    )
  }
}

export default Example;

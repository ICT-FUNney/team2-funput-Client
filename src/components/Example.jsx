import React from 'react';

class Example extends React.Component {
  render() {
      console.log('number:' + JSON.stringify(this.props))
    return (
      <div>
        {this.props.number}
      </div>
    );
  }  
}

export default Example;

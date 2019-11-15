import React from 'react';
import ReactDOM from 'react-dom';
const WorkDetail = () => {
    constructor(props) 
        super(props);

        this.state={
            input:""
        };
    
  return (
      <form>
          <input type="text" 
          value={this.state.input} 
          onChange={this.handleChange}/>
          <button>投稿</button>
          </form>       
  );
}

handleChange = e =>{
    this.SVGElementInstanceList({input: e.currentTarget.value})
}

export default WorkDetail;
import React from "react"
import DropZone from "react-dropzone"



class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageData : [],
      value1 :'hogehoge',
      value2 : '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
    onDrop = (acceptedFiles) => {//画像ドロップ
   
      console.log(acceptedFiles);
      this.setState({
        value2: acceptedFiles
      });
    }
    

    handleClick(){
      alert(JSON.stringify(this.state.value2[0].lastModified));
    }
  
    render() {

      
      return (
        <div className="text-center mt-5">
          <DropZone onDrop={this.onDrop}>
            {({getRootProps, getInputProps, isDragActive}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {/* Click me to upload a file! */}

                {isDragActive ? "Drop it like it's hot!" :'Click me or drag a file to upload!'}
    
              </div>
            )}

          </DropZone>
          <button className ="imgButton" onClick ={this.handleClick}>投稿画像</button>
          
          
         
        </div>
      );
    }
  }

export default Main
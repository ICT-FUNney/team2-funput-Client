import React from "react"
import DropZone from "react-dropzone"

class Upload extends React.Component {
    onDrop = (acceptedFiles) => {
      console.log(acceptedFiles);
    }
  
    render() {
      return (
        <div className="text-center mt-5">
          <DropZone onDrop={this.onDrop}>
            {({getRootProps, getInputProps, isDragActive}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {/* Click me to upload a file! */}
                {isDragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
              </div>
            )}
          </DropZone>
        </div>
      );
    }
  }

export default Upload
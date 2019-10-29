import React, { useState, /*useCallback */} from 'react'
import Dropzone, { /*useDropzone*/ } from 'react-dropzone'
import './App.css'


const Main = () => {

  const [value1, setValue1] = useState(10);//ただのカウンタ
  const [value2, setValue2] = useState([]);
  const [URLs, setURLs] = useState([]);

  const onDrop = (acceptedFiles) => {//画像ドロップ 
    const newURLs = [...URLs]
    let url = ''

    acceptedFiles.forEach(acceptedFile => {
      url = URL.createObjectURL(acceptedFile)
      newURLs.push(url)
    })
    console.log(acceptedFiles);
    console.log(newURLs);

    setValue2(acceptedFiles);
    setURLs(newURLs);
  }

  return (
    <div className="text-center">
      <Dropzone onDrop={onDrop}>
        {({ isDragActive, getInputProps, getRootProps }) =>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
         
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && "Drop it like it's hot!"}
          </div>
        }
      </Dropzone>
      <p>Image</p>

      {
        URLs.map((url,i) => {
          return <img src={url} alt="" key ={i}/>
        })
      }

      <button className="imgButton" onClick={() => setValue1(value1 + 1)}>
        タダノカウンタ{value1}
      </button>
    </div>
  );
};

export default Main
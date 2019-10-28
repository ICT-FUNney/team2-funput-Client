import React, {useState,useCallback} from 'react'
import { useDropzone } from 'react-dropzone'
import './App.css'


const Main = () =>  {

const [value1, setValue1] = useState(10);//ただのカウンタ

const onDrop = (acceptedFiles => {//画像ドロップ
      console.log(acceptedFiles);
    });

const { isDragActive,getRootProps,getInputProps,acceptedFiles}
 = useDropzone (
  {onDrop});

      return (
        <div className="text-center">
          
          <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                {isDragActive &&  "Drop it like it's hot!"}
              </div>
              
              
              <ul className="list-group">
                <h3 className = "fileData">fileName</h3>
                   {acceptedFiles.map((acceptedFile,i) => (
                     <li key= {i} className="list-group-item list-group-item-success">{/*keyを指定*/}
                        {acceptedFile.name}
                      </li>
                    ))}
                </ul>
                
    
                <button className ="imgButton" onClick ={() => setValue1(value1+1)}>{value1}
               </button> 
         </div>
      );
    };
  

export default Main
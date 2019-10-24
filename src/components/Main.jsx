import React, {useState,useCallback} from 'react'
import { useDropzone } from 'react-dropzone'



function Main()  {

const [value1, setValue1] = useState('hogehoge');
const [value2, setValue2] = useState("");


   



const onDrop = useCallback(acceptedFiles => {//画像ドロップ
   
      console.log(acceptedFiles);
      setValue2({
        value2: acceptedFiles
      });
    }, []);

const { isDragActive,getRootProps,getInputProps,acceptedFiles} = useDropzone ({
  onDrop
});
    
/*
    handleClick(){
      alert(JSON.stringify(value2[0].lastModified));
    }
    */
  

      return (
        <div className="text-center mt-5">
          
          <div {...getRootProps()}>
              
                <input {...getInputProps()} />
                {!isDragActive && 'Click here or drop a file to upload!'}
                
              </div>

                {isDragActive ? "Drop it like it's hot!" :'Click me or drag a file to upload!'}
    
                <button className ="imgButton" onClick ={() => setValue2()}>投稿画像
               </button>
         </div>
      );
    };

export default Main
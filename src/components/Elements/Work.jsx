import React from 'react';
import Dropzone from 'react-dropzone'
const Work = () => {
  const [value1, setValue1] = useState(10);//ただのカウンタ
  const [value2, setValue2] = useState([]);
  const [URLs, setURLs] = useState([]);

  const onDrop = (acceptedFiles) => {//画像ドロップ 
    const newURLs = [...URLs]//スプレッド構文で、新しい配列を作成
    let url = ''

    acceptedFiles.forEach(acceptedFile => {
      url = URL.createObjectURL(acceptedFile)
      newURLs.push(url)//配列の末尾に urlの要素を追加
    })
    console.log(acceptedFiles);
    console.log(newURLs);

    setValue2(acceptedFiles);
    setURLs(newURLs);
  }

  return (
    <div>
      {/*onDrop(isDragActive, getInputProps, getRootProps){
          return <input {...getInputProps()} 
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && "Drop it like it's hot!"}
       }したのプログラムのイメージ*/}

      <Dropzone onDrop={onDrop}>
        {({ isDragActive,getInputProps, getRootProps }) => (
          <div className={isDragActive ? 'uploadContainerOnDrag' : 'uploadContainer'} {...getRootProps()}>
            <input {...getInputProps()} />
             {isDragActive ? "Drop it like it's hot!" : 'Drag a file to upload!'}
          </div>
        )}
      </Dropzone>

      <div className='displayImageAreaContainer'>
        <div className='displayAreaTitle'>Image will be previewed here!</div> 
         <div className='displayImageContainer'>
            {
            URLs.map((url,i) => {
              return <img className='image' src={url} alt="" key ={i}/>
            })
            }
         </div>
      </div>

     
    </div>
  );
};

export default Work;
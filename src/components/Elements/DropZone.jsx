import React, { useState, /*useCallback */ } from 'react'
import Dropzone from 'react-dropzone'
import '../../styles/Elements/DropZone.css'

const DropZone = () => {
  const [value, setValue] = useState([]);
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

    setValue(acceptedFiles);
    setURLs(newURLs);
  }

  return (
    <div>
      <Dropzone onDrop={onDrop}>
        {({ isDragActive, getInputProps, getRootProps }) => (
          <div className={isDragActive ? 'uploadContainerOnDrag' : 'uploadContainer'} {...getRootProps()}>
            <input {...getInputProps()} />
            <span className='uploadText'>{isDragActive ? "ファイル選択済" : 'ファイルを選択'}</span>
          </div>
        )}
      </Dropzone>
      <div className='displayImageAreaContainer'>
        <div className='displayImageContainer'>
          {
            URLs.map((url, i) => {
              return <img className='image' src={url} alt="" key={i} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default DropZone;

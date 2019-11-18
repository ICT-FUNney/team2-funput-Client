import React from 'react';
import Work from '../Elements/Work';

const ViewWorks = () => {
  const data1 = {
    "work_title": "タイトル２",
    "file_url": "",
    "description": "コメントだよー"
  };
  const data2 = {
    "work_title": "typescript clean architecture",
    "file_url": "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2FThe%20Girl%20of%20the%20nightjpg.jpg?alt=media&amp;token=4655abd4-94bb-414e-9c01-3f8be485b283",
    "description": "〜をレビューして欲しいです"
  };
  const worksDatas = [data1, data2]
    return (
        <div>
          ViewWorks
          {
            worksDatas.map((element,index) => {
              return <Work userName="hoge" description={element.description} url={element.file_url} key={index}/>
            })
          }
        </div>
    )
}

export default ViewWorks;

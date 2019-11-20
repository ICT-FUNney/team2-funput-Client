import React, { useEffect } from 'react';
import Work from '../Elements/Work';
import { useDispatch, useSelector } from 'react-redux';
import { getWorksRequest } from '../../actions/Works/ActionCreator';

// async function getData(){
//   const dispatch = useDispatch();
//   await useEffect(() => {
//     dispatch(getWorksRequest());
//   }, [])
//   const works = useSelector(state => state.works);
//   console.log(works);
//   return works;
// }

function useUserHook() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksRequest());
  }, [])

  const works = useSelector(state => state.works);
  console.log(works);
  return works;
}


const ViewWorks = (props) => {
  const data = useUserHook();
  console.log(data);
  if(Object.keys(data.works).length){
    console.log(data.works.b1018001);
  }
  Object.keys(data.works).length ? Object.keys(data.works.b1018001.uploads).forEach(function(key){
    console.log(data.works.b1018001.uploads[key]);
  }) : console.log("false")


  const data1 = {
    "work_title": "タイトル２",
    "file_url": "",
    "description": "コメントだよー"
  };
  const data2 = {
    "work_title": "typescript clean architecture",
    "file_url": "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2FThe%20Girl%20of%20the%20nightjpg.jpg?alt=media&amp;token=4655abd4-94bb-414e-9c01-3f8be485b283",
    "description": "〜をレビューして欲しいですaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  };
  const worksDatas = [data1, data2]
    return (
        <div>
          ViewWorks
          <div>
            {
              worksDatas.map((element,index) => {
                return <Work userName="hoge" description={element.description} url={element.file_url} key={index}/>
              })
            }
          </div>
          <div>
            hi
            {
              Object.keys(data.works).length ? Object.keys(data.works.b1018001.uploads).map((key,index)=>{
                console.log(data.works.b1018001.uploads[key]);
                return <div key = {index}>
                  <div key="work_title">{data.works.b1018001.uploads[key].work_title}</div>
                  <div key ="file_url">{data.works.b1018001.uploads[key].file_url}</div>
                  <div key="description">{data.works.b1018001.uploads[key].description}</div>
                </div>
              }) : <div>false</div>
            }
          </div>
          <div>
            hi2
            {
              Object.keys(data.works).length ? Object.keys(data.works.b1018001.uploads).map((key,index)=>{
                console.log(data.works.b1018001.uploads[key]);
                return <Work userName="hoge" description={data.works.b1018001.uploads[key].description} url={data.works.b1018001.uploads[key].file_url} key={index}/>
              }) : <div>false</div>
            }

          </div>
        </div>
    )
}

export default ViewWorks;

import React from 'react';
import Work from '../Elements/Work';
import { useSelector } from 'react-redux';
import '../../styles/Areas/ViewLikeWorks.css';

const ViewLikeWorks = () => {
  const works = useSelector(state => state.works)

  return (
    <div className="ViewLikeWorks-container">
      <div className="ViewLikeWorks-top">いいねした作品</div>
      <div className="ViewLikeWorks-Works">
        {
          Object.keys(works).length ? Object.keys(works.b1018001.uploads).map((key, index) => {
            return <Work userName={works.b1018001.uploads[key].user_id} index={index} work_title={works.b1018001.uploads[key].work_title} url={works.b1018001.uploads[key].file_url} key={index} path = {key}/>
          }) : <div>false</div>
        }
      </div>
    </div>
  )
}

export default ViewLikeWorks;

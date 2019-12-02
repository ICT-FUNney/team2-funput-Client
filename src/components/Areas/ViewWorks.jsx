import React from 'react';
import Work from '../Elements/Work';
import { useSelector } from 'react-redux';
import '../../styles/Areas/ViewWorks.css';

const ViewWorks = () => {
  const works = useSelector(state => state.works);

  return (
    <div className="ViewWorks-container">
      <div className="ViewWorks-top">みんなの作品</div>
      <div className="ViewWorks-Works">
        {
          Object.keys(works).length ? Object.keys(works.b1018001.uploads).map((key, index) => {
            return <Work userName="hoge" index={index} description={works.b1018001.uploads[key].description} url={works.b1018001.uploads[key].file_url} key={index} />
          }) : <div>false</div>
        }
      </div>
    </div>
  )
}

export default ViewWorks;

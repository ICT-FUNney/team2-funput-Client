import React, { useEffect } from 'react';
import Work from '../Elements/Work';
import { useDispatch, useSelector } from 'react-redux';
import { getWorksRequest } from '../../actions/Works/ActionCreator';
import '../../styles/Areas/ViewLikeWorks.css';

function useUserHook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksRequest());
  }, [dispatch])

  const works = useSelector(state => state.works);
  return works;
}

const ViewLikeWorks = () => {
  const data = useUserHook();

  return (
    <div className="ViewLikeWorks-container">
      <div className="ViewLikeWorks-top">いいねした作品</div>
      <div className="ViewLikeWorks-Works">
        {
          Object.keys(data.works).length ? Object.keys(data.works.b1018001.uploads).map((key, index) => {
            return <Work userName="hoge" description={data.works.b1018001.uploads[key].description} url={data.works.b1018001.uploads[key].file_url} key={index} />
          }) : <div>false</div>
        }
      </div>
    </div>
  )
}

export default ViewLikeWorks;

import React from 'react';
import '../../styles/Elements/Work.css';
import { useHistory } from 'react-router-dom';

const Work = (props) => {
  const { userName, work_title, url, path} = props;

  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname:'/detail',
      state:{
        url:url,
        path:path
      }
    });
  };

  return (
    <div className="work-container" onClick={handleClick}>
      <div className="WorkImage">
        <img src={url} alt={url} />
      </div>
      <div className="description" >
        {work_title}
      </div>
      <div className="userName">{userName}</div>
    </div>
  );
}

export default Work;

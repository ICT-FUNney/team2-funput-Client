import React from 'react';
import '../../styles/Elements/Work.css';
import { useHistory } from 'react-router-dom';

const Work = (props) => {
  const { userName, description, url, index } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push('/home/detail' + index);
  };

  return (
    <div className="work-container" onClick={handleClick}>
      <div className="WorkImage">
        <img src={url} alt={url} />
      </div>
      <div className="description" >
        {description}
      </div>
      <div className="userName">{userName}</div>
    </div>
  );
}

export default Work;
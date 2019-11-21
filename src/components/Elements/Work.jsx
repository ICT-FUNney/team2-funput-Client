import React from 'react';
import '../../styles/Elements/Work.css'

const Work = (props) => {
  const {userName,description,url} = props;

  return (
    <div className="work-container">
      <div className = "WorkImage">
        <img src={url} alt={url}/>
      </div>
      <div className = "description" >
        {description}
      </div>
      <div className="userName">{userName}</div>
    </div>
  );
}

export default Work;

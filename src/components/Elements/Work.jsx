import React from 'react';
import '../../styles/Elements/Work.css'

const Work = (props) => {
  const {userName,description,url} = props;

  return (
    <div className="container">
      <div className = "WorkImage">
        <img src={url} alt="No Image"/>
      </div>
      <div className = "description" >
        {description}
      </div>
      <div className="userName">{userName}</div>
    </div>
  );
}
// <img src="https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Frize_kana.jpg?alt=media&amp;token=65b4e5de-e381-48ca-bf11-3ed7b276e16b">

export default Work;

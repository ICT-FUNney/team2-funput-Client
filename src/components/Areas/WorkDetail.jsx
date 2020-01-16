import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Areas/WorkDetail.css'
import {getContentRequest} from '../../actions/Content/ActionCreator'
import Profile from './Profile'
import { useLocation } from 'react-router-dom';

const WorkDetail = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentRequest(location.state.path))
  },[location,dispatch]);

  const userInfo = {
    user:{
      b2018034:{
        icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
        name : "ユーザーネームだよ",
        comment:"いいね。"
      },
      b2018009:{
        icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
        name : "userNameだよ",
        comment:"ありがとう！"
      }
    }

  }
  const userInfo2 = {
    icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
    name : "ユーザーネームだよ",
    comment:"これはなんですか？"
  }
  const content = useSelector(state => state.contnet);
  return (
     <div id="workDetailContainer">

    <div id = "profileArea-work"><Profile/></div>
    <div id="wd-container">
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
      <div id = "wdm-container">
        <img id = "wdm-img" src={content.file_url} alt={content.file_url} />
        <div id="wdm-icons">
          <i className="fas fa-comment-dots"></i>
          <i className="fas fa-question-circle"></i>
          <i className="far fa-heart"></i>
        </div>
        <div id = "wdm-explain">
          <div id = "wdm-title">{content.work_title}</div>
          <div id = "wdm-description">{content.description}</div>
        </div>
      </div>
      <div id = "wdc-container">
        <div className = "wd-title">コメント</div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo.user.b2018034.icon} alt = {userInfo.user.b2018034.icon}/>
            <div className = "wd-userName">{userInfo.user.b2018034.name}</div>
          </div>
          <div className="wd-comment">{userInfo.user.b2018034.comment}</div>
        </div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo.user.b2018009.icon} alt={userInfo.user.b2018009.icon}/>
            <div className = "wd-userName">{userInfo.user.b2018009.name}</div>
          </div>
          <div className="wd-comment">{userInfo.user.b2018009.comment}</div>
        </div>
      </div>
      <div id = "wdq-container">
        <div className = "wd-title">質問</div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo2.icon} alt = {userInfo2.icon}/>
            <div className = "wd-userName">{userInfo2.name}</div>
          </div>
          <div className="wd-comment">{userInfo2.comment}</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WorkDetail;

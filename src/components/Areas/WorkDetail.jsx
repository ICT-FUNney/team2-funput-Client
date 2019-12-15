import React  from 'react'
import '../../styles/Areas/WorkDetail.css'
import Profile from './Profile'

const WorkDetail = (props) => {
  const {userName, title, description , url} = props;
  const fake = {
    title: "タイトル名",
    url: "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2FThe%20Girl%20of%20the%20nightjpg.jpg?alt=media&amp;token=4655abd4-94bb-414e-9c01-3f8be485b283",
    description: "これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。"
  }

  const userInfo = {
    user:{
      b2018034:{
        icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
        name : "ユーザーネームだよ",
        comment:"コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。"
      },
      b2018009:{
        icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
        name : "userNameだよ",
        comment:"コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。コメントが入ります。"
      }
    }

  }
  const userInfo2 = {
    icon : "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d",
    name : "ユーザーネームだよ",
    comment:"コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。コメントです。"
  }
  return (
   

    <div id="workDetailContainer">
      <div id = "profileArea"><Profile/></div>
    <div id="wd-container">
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
      <div id = "wdm-container">
        <img id = "wdm-img" src={fake.url} alt={fake.url} />
        <div id="wdm-icons">
          <i class="fas fa-comment-dots"></i>
          <i class="fas fa-question-circle"></i>
          <i class="far fa-heart"></i>
        </div>
        <div id = "wdm-explain">
          <div id = "wdm-title">{fake.title}</div>
          <div id = "wdm-description">{fake.description}</div>
        </div>
      </div>
      <div id = "wdc-container">
        <div className = "wd-title">コメント</div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo.user.b2018034.icon}/>
            <div className = "wd-userName">{userInfo.user.b2018034.name}</div>
          </div>
          <div className="wd-comment">{userInfo.user.b2018034.comment}</div>
        </div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo.user.b2018009.icon}/>
            <div className = "wd-userName">{userInfo.user.b2018009.name}</div>
          </div>
          <div className="wd-comment">{userInfo.user.b2018009.comment}</div>
        </div>
      </div>
      <div id = "wdq-container">
        <div className = "wd-title">質問</div>
        <div className = "wd-box">
          <div className = "wd-user-info">
            <img src = {userInfo2.icon}/>
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

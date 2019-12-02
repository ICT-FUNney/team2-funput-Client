import React  from 'react'
import '../../styles/Areas/WorkDetail.css'

const WorkDetail = (props) => {
  const {userName, title, description , url} = props;
  const fake = {
    title: "作者名",
    url: "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2FThe%20Girl%20of%20the%20nightjpg.jpg?alt=media&amp;token=4655abd4-94bb-414e-9c01-3f8be485b283",
    description: "これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。これは説明文です。"
  }

  const userInfo = {}
  return (
    <div id="wd-container">
      <div id = "wdm-container">
        <img id = "wdm-img" src={fake.url} alt={fake.url} />
        <div id = "wdm-title">{fake.title}</div>
        <div id = "wdm-description">{fake.description}</div>
      </div>
      <div id = "wdc-container">
        <div class = "comment-style">
          <div class = "user-info">
            <img src = "https://firebasestorage.googleapis.com/v0/b/takashi-s-works-uploads.appspot.com/o/images%2Fface.jpg?alt=media&token=8247b8f6-7239-4285-932f-04f03284ce7d"/>
          </div>
        </div>
      </div>
      <div id = "wdq-container">
        <div class = "comment-style">
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;

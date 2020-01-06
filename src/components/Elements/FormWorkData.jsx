import React, { useState } from 'react';
import { postWorksDataRequest } from '../../actions/Works/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Elements/FormWorkData.css'


const FormWorkData = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(state => state.loginUser);
  const [workPostTitle, setworkPostTitle] = useState('');
  const onWorkPostTitleChange = (e) => {
    setworkPostTitle(e.currentTarget.value);
  }
  const [workPostComment, setworkPostComment] = useState('');
  const onWorkPostComment = (e) => {
    setworkPostComment(e.currentTarget.value);
  }
  const handleClickSubmitt = function (e) {
    e.preventDefault();
    if (workPostTitle === '' || workPostComment === '') {
      return;
    }
    const worksData = [workPostTitle, "file_url", workPostComment];
    dispatch(postWorksDataRequest(worksData,loginUser));
    setworkPostTitle("");
    setworkPostComment("");
  }

  return (

    <div id="formWorkData">
      <div className="container">
        <form>
          <div id="wpt">
            <div>
              <input id="workPostTitle" type="text" value={workPostTitle} onChange={onWorkPostTitleChange} placeholder='作品名'></input>
            </div>
          </div>
          <div id="wpc">
            <div>
              <textarea id="workPostComment" value={workPostComment} onChange={onWorkPostComment} placeholder='投稿内容'></textarea>
            </div>
          </div>
          <input id='submit' type="submit" value="投稿する" onClick={handleClickSubmitt} />
        </form>

      </div>
    </div>
  )
}

export default FormWorkData;

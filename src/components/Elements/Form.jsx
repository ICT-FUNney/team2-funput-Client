import React from 'react';
import {postWorksDataRequest} from '../../actions/Works/ActionCreator';
import {useDispatch } from 'react-redux';


const Form = () => {
  let workPostTitle;
  let workPostComment;
  let worksData;
  const dispatch = useDispatch();

  const handleClickSubmitt = function(e){
      e.preventDefault();
      workPostTitle = document.getElementById("workPostTitle");
      workPostComment = document.getElementById("workPostComment");
      worksData = [workPostTitle.value, "file_url", workPostComment.value];
      console.log(worksData);
      console.log(workPostTitle.value);
      console.log(workPostComment.value);
      dispatch(postWorksDataRequest(worksData));
      workPostTitle.value="";
      workPostComment.value="";
  }

  return (
    <div id="form">
      <form>
        <div>
          <div>作品タイトル：</div>
          <input id="workPostTitle"></input>
        </div>
        <div>
          <div>コメント：</div>
          <input id="workPostComment"></input>
        </div>
        <input type="submit" value="投稿する" onClick={ handleClickSubmitt}/>
      </form>
    </div>
  )
}

export default Form;

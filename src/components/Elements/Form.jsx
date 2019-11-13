import React from 'react';
import {postWorksDataRequest} from '../../actions/Works/ActionCreator';
import {useDispatch } from 'react-redux';


const Form = () => {
  const handleClickSubmitt = function(e){
      e.preventDefault();
      const workPostTitle = document.getElementById("workPostTitle");
      const workPostComment = document.getElementById("workPostComment");
      const worksData = [workPostTitle.value, "file_url", workPostComment.value];
      console.log(worksData);

      console.log(workPostTitle.value);
      console.log(workPostComment.value);
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
        <input type="submit" value="投稿する" onClick={handleClickSubmitt}/>
      </form>
    </div>
  )
}

export default Form;

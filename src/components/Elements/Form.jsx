import React from 'react';
import {postWorksDataRequest} from '../../actions/Works/ActionCreator';

const Form = () => {

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
        <input type="submit" value="投稿する"/>
      </form>
    </div>
  )
}

export default Form;

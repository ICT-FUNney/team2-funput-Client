import React from 'react';

const Form = () => {
  return (
    <div id="form">
      <form>
        <div>
          <div>作品タイトル：</div>
          <input id="work-post-title"></input>
        </div>
        <div>
          <div>コメント：</div>
          <input id="work-post-comment"></input>
        </div>
        <input type="submit" value="投稿する"/>
      </form>
    </div>
  )
}

export default Form;

import React from 'react';
import { useState } from "react";
import '../../styles/Elements/WorkDetail.css'

const WorkDetail = () => {
    const [title, setTitle] = useState("");
    const [aboutWork, setAboutWork] = useState("");

    console.log(
      `title: ${title}, aboutWork: ${aboutWork}`
    );
    return (
      <form>
          <div class="title">
        <input
          type="text"
          placeholder="タイトル"
          class="box1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        </div>
        <div class="aboutWork">
        <input
          type="text"
          placeholder="投稿内容"
          class="box2"
          onChange={(e) => setAboutWork(e.target.value)}
          value={aboutWork}
        />
       
        </div>
      </form>
    );
  };
export default WorkDetail;
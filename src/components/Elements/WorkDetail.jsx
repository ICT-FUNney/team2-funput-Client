import React from 'react';
const WorkDetail = () => {
    const [title, setTitle] = useState("");
    const [aboutWork, setAboutWork] = useState("");
    console.log(
      `title: ${title}, aboutWork: ${aboutWork}`
    );
    return (
      <form>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          onChange={(e) => setAboutWork(e.target.value)}
          value={aboutWork}
        />
        <button>投稿</button>
      </form>
    );
  };
export default WorkDetail;
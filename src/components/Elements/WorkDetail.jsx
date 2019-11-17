import React from 'react';
const WorkDetail = () => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    console.log(
      `textBox1: ${text1}, textBox2: ${text2}`
    );
    return (
      <form>
        <input
          type="text"
          onChange={(e) => setText1(e.target.value)}
          value={text1}
        />
        <input
          type="text"
          onChange={(e) => setText2(e.target.value)}
          value={text2}
        />
        <button>投稿</button>
      </form>
    );
  };

export default WorkDetail;
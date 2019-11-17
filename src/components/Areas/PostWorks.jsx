import React from 'react';

const PostWorks = () => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    console.log(
      `textBox1: ${text1}, textBox2: ${text2}`
    );
    return (
      <form>
        <input
          type="text"
          onChange={(e: any) => setText1(e.target.value)}
          value={text1}
        />
        <input
          type="text"
          onChange={(e: any) => setText2(e.target.value)}
          value={text2}
        />
        <button>投稿</button>
      </form>
    );
};

export default PostWorks;
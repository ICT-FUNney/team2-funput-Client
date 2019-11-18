import React from 'react';
import '../../styles/Pages/Post.css';
import PostWorks from '../Areas/PostWorks';
const Post = () => {
    return (
        <div id='main'>
            <div id='postContainer'>
                <div id='postArea'>profile</div>
                <div id='profileArea'>
                    <PostWorks />
                    </div>
            </div>
        </div>
    )
}

export default Post;
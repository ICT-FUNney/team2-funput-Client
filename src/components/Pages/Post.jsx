import React from 'react';
import '../../styles/Pages/Post.css';
import Profile from '../Areas/Profile';
import PostWorks from '../Areas/PostWorks';

const Post = () => {
    return (
        <div id='main'>
            <div id='postContainer'>
                <div id='postArea'>
                   <PostWorks/>
                    </div>
                <div id='profileArea'>
                    <Profile />
                </div>

            </div>
        </div>
    )
}

export default Post;

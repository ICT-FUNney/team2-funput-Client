import React from 'react';
import '../../styles/Pages/Post.css';
import Profile from '../Areas/Profile';

const Post = () => {
    return (
        <div id='main'>
            <div id='postContainer'>
                <div id='postArea'>
                    post
                    </div>
                <div id='profileArea'>
                    <Profile />
                </div>

            </div>
        </div>
    )
}

export default Post;
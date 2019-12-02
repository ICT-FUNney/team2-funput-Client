import React from 'react';
import '../../styles/Pages/Like.css';
import UserInfo from '../Areas/UserInfo';
import ViewLikeWorks from '../Areas/ViewLikeWorks';

const Like = () => {
    return (
        <div id='main'>
            <div id='likeContainer'>
                <div id='userInfoArea'>
                    <UserInfo />
                </div>
                <div id='likeArea'><ViewLikeWorks /></div>
            </div>
        </div>
    )
}

export default Like;
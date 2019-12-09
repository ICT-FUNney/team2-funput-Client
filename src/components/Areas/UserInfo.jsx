import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/UserInfo.css';
import Button from '../Elements/Button';

const UserInfo = () => {
    return (
        <div>
            <Icon />
            <span className='userInfoTitle'>自己紹介</span>
            <span className='userInfoTitle'>今までの作品</span>
        </div>
    )
}

export default UserInfo;
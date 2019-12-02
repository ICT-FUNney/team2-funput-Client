import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/UserInfo.css';
import Button from '../Elements/Button';

const UserInfo = () => {
    return (
        <div>
            <Icon />
            <Button />
            <span className='userInfoTitle'>自己紹介</span>
            <div className='userInfoTitle'>今までの作品</div>
        </div>
    )
}

export default UserInfo;
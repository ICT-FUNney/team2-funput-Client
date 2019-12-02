import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/Profile.css';
import Button from '../Elements/Button';

const Profile = () => {
    return (
        <div>
            <Icon />
            <Button />
            <span className='profileTitle'>自己紹介</span>
            <span className='profileTitle'>今までの作品</span>
        </div>
    )
}

export default Profile;
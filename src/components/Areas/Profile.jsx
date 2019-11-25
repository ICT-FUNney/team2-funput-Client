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
            <div className='worksTitle'>今までの作品</div>
        </div>
    )
}

export default Profile;
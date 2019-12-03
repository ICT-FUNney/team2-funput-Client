import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/Profile.css';
import Button from '../Elements/Button';

const Profile = () => {
    return (
        <div id = 'profileContainer'>
            <div id = 'IconArea'> <Icon /> </div>
           <div id = 'ButtonArea'> <Button/></div>
           <div id = 'profile'>
            <p><span className='profileTitle'>自己紹介</span></p>
            <span className='profileTitle'>今までの作品</span>
            </div>
        </div>
    )
}

export default Profile;
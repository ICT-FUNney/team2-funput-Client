import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/Profile.css';
import Button from '../Elements/Button';
import { useSelector } from 'react-redux';
import gray from '../..//image/gray.jpg'
    const Profile = () => {
    const works = useSelector(state => state.works);
    return (
        <div id = 'profileContainer'>
            <div id = 'IconArea'> <Icon /> </div>
           <div id = 'ButtonArea'> <Button/></div>
           <div id = 'profile'>
               <span className='profileTitle'>自己紹介</span>
            </div>
            <div id = 'Worked'>
                <span className='profileTitle'>今までの作品</span>
              </div>
          <div id='MyWork'>
          <div className='MyWorkArea'>
            <div className='imageArea'>
            <div class="square1"></div>
            <div class="square2"></div>
            <div class="square3"></div>
            <div class="square4"></div>
      </div>
    </div>
                </div>

        </div>
    )
}

export default Profile;
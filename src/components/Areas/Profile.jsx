import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/Profile.css';
import Button from '../Elements/Button';
import sample1 from '../../image/1.jpg';
import sample2 from '../../image/2.png';
import sample3 from '../../image/3.png';
import sample4 from '../../image/FUNneyLogo.png';
// import { useSelector } from 'react-redux';
    const Profile = () => {
    // const works = useSelector(state => state.works);
    return (
        <div id = 'profileContainer'>
            <div id = 'IconArea'> <Icon /> </div>
           <div id = 'ButtonArea'> <Button/></div>
           <div id = 'profile'>
               <span className='profileTitle'>自己紹介</span>
              <div className='selfIntroduction'>
                 <p> 知能システムコース学部2年生です。
              フロントエンドに興味があります！ </p>
              </div>
            </div>
            <div id = 'Worked'>
                <span className='profileTitle'>今までの作品</span>
              </div>
          <div id='MyWork'>
          <div className='MyWorkArea'>
            <div className='imageArea'>
            <div className="square1">
            <img id = 'sample1' src={sample1} alt="" />
            </div>
            <div className="square2">
            <img id = 'sample2' src={sample2} alt="" />
            </div>
            <div className="square3">
            <img id = 'sample3' src={sample3} alt="" />
            </div>
            <div className="square4">
            <img id = 'sample4' src={sample4} alt="" />
            </div>
      </div>
    </div>
                </div>

        </div>
    )
}

export default Profile;

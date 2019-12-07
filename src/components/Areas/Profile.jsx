import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/Profile.css';
import Button from '../Elements/Button';
import Work from '../Elements/Work';
import { useSelector } from 'react-redux';

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
            <div className='MyWorks-Works'>
        {
          Object.keys(works).length ? Object.keys(works.b1018001.uploads).map((key, index) => {
            return <Work userName="hoge" index={index} description={works.b1018001.uploads[key].description} url={works.b1018001.uploads[key].file_url} key={index} />
          }) :<div>false</div>
    }
      </div>
      </div>
                

        </div>
    )
}

export default Profile;
import React from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/UserInfo.css';


const UserInfo = () => {
    return (
        <div>
            <Icon />
            <p>フォロー</p>
            <p>フォロワー</p>
            <p>Funny残高</p>
            <p className='funny'>Funny</p>
            <p>質問履歴</p>
            <p>コメント履歴</p>
        </div>
    )
}

export default UserInfo;
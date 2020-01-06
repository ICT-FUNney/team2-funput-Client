import React, { useState } from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/UserInfo.css';
import { useSelector } from 'react-redux';


const UserInfo = () => {
    const Funny = useSelector(state => state.funny.funney)
    return (
        <div>
            <Icon />
            <p>フォロー</p>
            <p>フォロワー</p>
            <hr/>
            <p>Funny残高</p>
            <p className='funny'>{Funny} Funny</p>
            <hr/>
            <p>質問履歴</p>
            <p>コメント履歴</p>
        </div>
    )
}

export default UserInfo;
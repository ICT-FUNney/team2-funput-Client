import React, { useState, useEffect } from 'react';
import Icon from '../Elements/Icon';
import '../../styles/Areas/UserInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFunnyRequest } from '../../actions/Funny/ActionCreator';


const UserInfo = () => {
    const dispatch = useDispatch();
    const id =useSelector(state=> state.loginUser.id)
    const token = useSelector(state => state.loginUser.token)
    console.log(id);
    console.log(token);
    const data = {
        id,
        password:''
    }
    useEffect(() => {
        dispatch(getFunnyRequest(data,token))
    },[])
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

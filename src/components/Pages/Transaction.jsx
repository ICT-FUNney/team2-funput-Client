import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendFunnyRequest } from '../../actions/Funny/ActionCreator';
import {useSelector} from 'react-redux';

const Transaction = () => {
  const loginUser = useSelector(state => state.loginUser);
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const dispatch = useDispatch();

  const onSenderIdChenge = (e) => {
    setSenderId(e.currentTarget.value);
  }

  const onReceiverIdChenge = (e) => {
    setReceiverId(e.currentTarget.value);
  }

  const onClickSendButton = () => {
    const data = {
        source_id: loginUser.id,
        send_id: receiverId,
        balance: 10
      }
    const token = loginUser.token;
    dispatch(sendFunnyRequest(data, token));
    setSenderId('');
    setReceiverId('');
  }

  return (
    <div>
      <input type='text' value={senderId} onChange={onSenderIdChenge}/>
      <input type='text' value={receiverId} onChange={onReceiverIdChenge}/>
      <button onClick={onClickSendButton}>送金</button>
    </div>
  )
}

export default Transaction;

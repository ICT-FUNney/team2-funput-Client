import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../actions/LoginUser/ActionCreator';

const SignIn = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputpassword] = useState('');
  const dispatch = useDispatch()

  const onInputIdChange = (e) => {
    setInputId(e.currentTarget.value);
  }

  const onInputPasswordChange = (e) => {
    setInputpassword(e.currentTarget.value);
  }

  const onClickLoginButton = () => {
    dispatch(signInRequest({ id: inputId, password: inputPassword }));
    setInputId('');
    setInputpassword('');
  }

  return (
    <div>
      <input type='text' value={inputId} onChange={onInputIdChange} />
      <input type='text' value={inputPassword} onChange={onInputPasswordChange} />
      <button onClick={onClickLoginButton}>ログイン</button>
    </div>
  )
}

export default SignIn;

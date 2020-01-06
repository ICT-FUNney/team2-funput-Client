import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Signin from './SignIn';
import Transaction from './Transaction';

const Background = () =>{
  return (
    <div>
      <Signin />
      <Transaction />
    </div>
  )
}

export default Background;

import React, { useEffect } from 'react';
import Header from './Areas/Header';
import { useDispatch } from 'react-redux';
import '../styles/App.css';
import Main from './Pages/Main';
import { BrowserRouter } from 'react-router-dom'
import { getUsersRequest } from '../actions/Users/ActionCreator';
// import { getWorksRequest } from '../actions/Works/ActionCreator';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersRequest());
    // dispatch(getWorksRequest());
  });
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  )
}

export default App;

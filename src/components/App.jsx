import React,{useEffect} from 'react';
import Header from './Areas/Header';
import {useDispatch } from 'react-redux';
import '../styles/App.css';
import Main from './Pages/Main';
import {getExampleRequest} from '../actions/Example/ActionCreator';
import {getUsersRequest} from '../actions/Users/ActionCreator';
import {getWorksRequest} from '../actions/Works/ActionCreator';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getExampleRequest());
    dispatch(getUsersRequest());
    dispatch(getWorksRequest());
  });

  return (
    <div id="container">
      <Header />
      <Main />
    </div>
  )
}

export default App;

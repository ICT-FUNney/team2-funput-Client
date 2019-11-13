import React,{useEffect} from 'react';
import Header from './Areas/Header';
import {useDispatch } from 'react-redux';
import '../styles/App.css';
import Main from './Pages/Main';
import Post from './Pages/Post';
import {getExampleRequest} from '../actions/Example/ActionCreator';
import {getUsersRequest} from '../actions/Users/ActionCreator';
import {getWorksRequest} from '../actions/Works/ActionCreator';
import {postWorksRequest} from '../actions/Works/ActionCreator';
import {postWorksDataRequest} from '../actions/Works/ActionCreator';


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getExampleRequest());
    dispatch(getUsersRequest());
    dispatch(getWorksRequest());
    dispatch(postWorksRequest());
  });

  return (
    <div id="container">
      <Header />
      <Main />
      <Post />
    </div>
  )
}

export default App;

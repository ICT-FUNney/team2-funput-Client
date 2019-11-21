import React, { useEffect } from 'react';
import Header from './Areas/Header';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/App.css';
import Main from './Pages/Main';
import {BrowserRouter} from 'react-router-dom'
import { getExampleRequest } from '../actions/Example/ActionCreator';
import { getUsersRequest } from '../actions/Users/ActionCreator';
import { getWorksRequest } from '../actions/Works/ActionCreator';
import FormWorkData from '../components/Elements/FormWorkData'


const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExampleRequest());
    dispatch(getUsersRequest());
    dispatch(getWorksRequest());
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

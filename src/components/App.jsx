import React, { useEffect } from 'react';
import Header from './Areas/Header';
import { useDispatch } from 'react-redux';
import '../styles/App.css';
import Main from './Pages/Main';
import {BrowserRouter} from 'react-router-dom'
import { getExampleRequest } from '../actions/Example/ActionCreator';
import { getUsersRequest } from '../actions/Users/ActionCreator';
import { getWorksRequest } from '../actions/Works/ActionCreator';
import FormWorkData from '../components/Elements/FormWorkData'
import ViewWorks from '../components/Areas/ViewWorks'


const App = () => {
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
        <ViewWorks />
      </BrowserRouter>
    </div>
  )
}

export default App;

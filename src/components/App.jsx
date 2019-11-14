import React from 'react';
import Header from './Areas/Header';
import '../styles/App.css'
import Main from './Pages/Main';
import {BrowserRouter} from 'react-router-dom'


const App = () => {
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

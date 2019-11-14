import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Like from './Like';
import Post from './Post';
const Main = () => {
  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/ }
      <Route exact path='/home' component={Home} />
      <Route path='/like' component={Like} />
      <Route path='/post' component={Post} />
    </div>
  )
}

export default Main;
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Like from './Like';
import Post from './Post';
import ViewWorks from '../Areas/ViewWorks'
const Main = () => {
  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/ }
      <Route exact path='/home' component={Home} />
      <Route path='/like' component={Like} />
      <Route path='/post' component={Post} />
      <ViewWorks />
    </div>
  )
}

export default Main;

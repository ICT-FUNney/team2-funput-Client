import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route ,Switch} from 'react-router-dom';
import Home from './Home';
import Like from './Like';
import Post from './Post';
import WorkDetail from '../Areas/WorkDetail';
import Background from './Background';
import { getWorksRequest } from '../../actions/Works/ActionCreator';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksRequest());
  }, [dispatch])


  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/}
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/like' component={Like} />
        <Route path='/post' component={Post} />
        <Route path ='/background' component = {Background}/>
        <Route path ='/detail' component={WorkDetail} />
      </Switch>
    </div>
  )
}

export default Main;

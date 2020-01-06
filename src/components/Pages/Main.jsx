import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from './Home';
import Like from './Like';
import Post from './Post';
import WorkDetail from '../Areas/WorkDetail';
import Signin from './SignIn';
import Transaction from './Transaction';
import Background from './Background';
import { getWorksRequest } from '../../actions/Works/ActionCreator';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksRequest());
  }, [dispatch])

  const works = useSelector(state => state.works);

  return (
    <div id='main'>{/*各urlにて表示させるcomponentを設定する*/}
      <Route exact path='/home' component={Home} />
      <Route path='/like' component={Like} />
      <Route path='/post' component={Post} />
      <Route path = '/background' component = {Background}/>
      {Object.keys(works).length && Object.keys(works.b1018001.uploads).map((key, index) => {
        return <Route key={index} path={"/home/detail" + index} render={() => <WorkDetail index={index} />} />
      })}
    </div>
  )
}

export default Main;

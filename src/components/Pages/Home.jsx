import React from 'react';
import '../../styles/Pages/Home.css';
import UserInfo from '../Areas/UserInfo';
import ViewWorks from '../Areas/ViewWorks';
import WorkDetail from '../Areas/WorkDetail';

const Home = () => {
    return (
        <div id='main'>
            <div id='homeContainer'>
                <div id='userInfoArea'>
                    <UserInfo />
                </div>
                <div id='workArea'><ViewWorks /></div>
            </div>
        </div>
    )
}

export default Home;

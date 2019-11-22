import React from 'react';
import '../../styles/Pages/Home.css';
import Profile from '../Areas/Profile';
import ViewWorks from '../Areas/ViewWorks';

const Home = () => {
    return (
        <div id='main'>
            <div id='homeContainer'>
                <div id='profileArea'>
                    <Profile />
                </div>
                <div id='workArea'><ViewWorks /></div>
            </div>
        </div>
    )
}

export default Home;

import React from 'react';
import '../../styles/Pages/Home.css';
import Profile from '../Areas/Profile';

const Home = () => {
    return (
        <div id='main'>
            <div id='homeContainer'>
                <div id='profileArea'>
                    <Profile />
                </div>
                <div id='workArea'><p>みんなの作品</p></div>
            </div>
        </div>
    )
}

export default Home;

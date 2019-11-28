import React from 'react';
import Tab from '../Elements/Tab';
import '../../styles/Areas/Header.css';

const Header = () => {

    return (
        <div id='header'>
            <div id='headerContainer'>
                <div id='headerIconArea'>
                   FUNPUTLOGO
                </div>
                <div id='headerTitleArea'>
                    <div className='headerTitle'>FUNPUT</div> 
                <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
                <div >
                    <i className="fas fa-home fa-lg "></i>
                    <Tab name={'HOME'} url={"/home"} />
                    <i className="fas fa-file-export"></i>
                    <Tab name={'投稿'} url={"/post"} />
                    <i className="far fa-heart"></i>
                    <Tab name={'いいね'} url={"/like"} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;

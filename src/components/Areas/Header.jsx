import React from 'react';
import Tab from '../Elements/Tab';
import '../../styles/Areas/Header.css';

const Header = () => {

    return (
        <div id='header'>
            <div className='headerTitle'>FUNPUT</div>
            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
            <div >
                <i className="fas fa-home fa-lg "></i>
                <Tab icon={"url"} name={'HOME'} url={"/home"} />
                <i className="fas fa-file-export"></i>
                <Tab icon={"url"} name={'投稿'} url={"/post"} />
                <i className="far fa-heart"></i>
                <Tab icon={"url"} name={'いいね'} url={"/like"} />
            </div>
        </div >
    )
}

export default Header;

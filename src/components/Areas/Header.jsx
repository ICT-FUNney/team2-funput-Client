import React from 'react';

import '../../styles/Areas/Header.css';

const Header = () => {

    return (
        <div id='header'>
            <div className='headerTitle'>FUNPUT</div>
            <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
            <div >
                <i className="fas fa-home fa-2x "></i>
                <a href={"/home"} >HOME</a>
                <i className="fas fa-file-export fa-2x"></i>
                <a href={"/post"} >投稿</a>
                <i className="far fa-heart fa-2x"></i>
                <a href={"/like"} >いいね</a>
            </div>
        </div >
    )
}

export default Header;

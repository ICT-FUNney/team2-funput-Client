import React from 'react';

import '../../styles/Areas/Header.css';
import logo from '../../image/FUNneyLogo.png';

const Header = () => {

    return (
        <div id='header'>
            <div id='headerContainer'>
                <div id='funnylogoArea'>
                <img id = 'logo'
          src={logo}
          alt=""
        />
                    </div>
            <div id='linkArea'>
                 
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
        </div>
        </div>
    )
}

export default Header;

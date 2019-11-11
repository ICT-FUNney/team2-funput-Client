import React from 'react';
import Tab from '../Elements/Tab';

const Header = () => {
    return (
        <div id='header'>
            Header
            <Tab icon={"url"} name={'HOME'} />
            <Tab icon={"url"} name={'投稿'} />
            <Tab icon={"url"} name={'いいね'} />
        </div>
    )
}

export default Header;
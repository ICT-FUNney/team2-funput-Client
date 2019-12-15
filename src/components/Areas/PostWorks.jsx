import React from 'react';
import FormWorkData from '../Elements/FormWorkData';
import DropZone from '../Elements/DropZone';
import '../../styles/Areas/PostWorks.css'
const PostWorks = () => {
    return (
        <div id='postWorksContainer'>
            <div id='uploadArea'><DropZone /></div>
            <div id='formArea'><FormWorkData /></div>
        </div>
    )
}

export default PostWorks;
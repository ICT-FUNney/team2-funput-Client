import React from 'react';
import { useHistory } from 'react-router-dom'
import '../../styles/Elements/Tab.css'

const Tab = (props) => {
    const { icon, name, url } = props;
    const history = useHistory();

    const handleClick = (event) => {
        // event.prevenDefault;//最初のクリックの挙動を抑える
        history.push(url);
    };

    return (
        <span className='tabSpace'>
            <span onClick={handleClick}>{name}</span>
        </span>

    )
}

export default Tab;

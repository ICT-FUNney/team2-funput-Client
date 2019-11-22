import React from 'react';
import { useHistory } from 'react-router-dom'
import '../../styles/Elements/Tab.css'

const Tab = (props) => {
    const { name, url } = props;
    const history = useHistory();

    const handleClick = () => {
        history.push(url);
    };

    return (
        <span className='tabSpace'>
            <span onClick={handleClick}>{name}</span>
        </span>
    )
}

export default Tab;

import React from 'react';
import {useHistory} from 'react-router-dom'


const Tab = (props) => {
    const {icon, name, url} = props;
    const history = useHistory();

    const handleClick = (event) => {
        // event.prevenDefault;//最初のクリックの挙動を抑える
        history.push(url);
      };
    
    return (
        <div>
            <span onClick={handleClick}>{name}</span> 
        </div>
    )
}

export default Tab;
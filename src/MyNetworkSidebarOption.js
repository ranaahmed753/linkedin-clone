
import React from 'react';
import './MyNetworkSidebarOption.css';

const MyNetworkSidebarOption = ({Icon,title}) => {
    return (
        <div className='myNetworkSidebar__option'>
            <Icon className='myNetworkSidebar__icon'/>
            <h2>{title}</h2>
        </div>
    );
};

export default MyNetworkSidebarOption;
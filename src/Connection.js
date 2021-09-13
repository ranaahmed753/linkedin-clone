import { Avatar } from '@material-ui/core';
import React from 'react';
import './Connection.css';

const Connection = ({imageUrl,username,backgroundUrl}) => {
    return (
        <div className='connection'>
            <img alt='' src={backgroundUrl}/>
            <Avatar style={{height:55,width:55,cursor:'pointer'}} className='connection__avatar' src={imageUrl}/>
            <h1 style={{cursor:'pointer'}}>{username}</h1>
            <h2 style={{cursor:'pointer'}}>Physicst||Entrepreneur</h2>
            <button>Connect</button>
        </div>
    );
};

export default Connection;
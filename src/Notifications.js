import React, { useState } from 'react';
import './Notifications.css';
import NotificationFeed from './NotificationFeed';
import Popup from './Popup';



const Notifications = () => {
    
    
    return (
        <div className='notifications'>
            <div className='notification__sidebar'>
                
                <div className='notificationSidebar__top'>
                    <h1 style={{alignSelf:'center',fontSize:14,fontWeight:500,marginTop:20}}>Notifications</h1>
                    <h1 style={{alignSelf:'center',fontSize:14,fontWeight:400,marginTop:10}}>You’re all caught up! Check</h1>
                    <h1 style={{alignSelf:'center',fontSize:14,fontWeight:400,marginTop:7}}>back later for new</h1>
                    <h1 style={{alignSelf:'center',fontSize:14,fontWeight:400,marginTop:7}}>notifications</h1>
                </div>
                <div className='notificationSidebar__bottom'>
                    <h1 style={{alignSelf:'center',fontSize:14,fontWeight:400,marginTop:10}}>Improve your notifications</h1>
                    <h1 style={{alignSelf:'center',fontSize:16,fontWeight:500,marginTop:10,cursor:'pointer',color:'#63AFE9'}}>View settings</h1>
                </div>
            </div>
            <div className='notification__feed'>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                <NotificationFeed/>
                
            </div>
            <div className='notification__widgets'>
           
            <div className='notificationWidget__container'>
                <img style={{height:300,width:250,backgroundRepeat:'no-repeat',objectFit:'fill',cursor:'pointer'}} src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'/>
            </div>
            </div>
        </div>
    );
};

export default Notifications;
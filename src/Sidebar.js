import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {

    const recentItem = (topic) =>{
        return <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    }
        return (
        <div className='sidebar'>
           <div className='sidebar__top'>
               <img src='https://s.itl.cat/pngfile/s/210-2103455_good-background-photo-for-linkedin-page-linkedin-background.jpg' alt=''/>
               <Avatar className='sidebar__avatar' src='https://i.insider.com/5d66d21e6f24eb396b6c8192?width=700'/>
               <h2>Rana Ahmed</h2>
               <h4>ranaahmed@gmail.com</h4>
           </div>

           <div className='sidebar__stats'>
               <div className='sidebar__stat'>
                   <p>Who viewed you</p>
                   <p className='sidebar__statNumber'>2448</p>
               </div>
               <div className='sidebar__stat'>
                   <p>Views on post</p>
                   <p className='sidebar__statNumber'>2448</p>
               </div>
           </div>

           <div className='sidebar__bottom'>
               <p style={{fontSize:13}}>Recent</p>
               <div className='sidebar__recent'>
               {recentItem('react.js')}
               {recentItem('node.js')}
               {recentItem('electron.js')}
               {recentItem('next.js')}
               {recentItem('angular.js')}
               {recentItem('vue.js')}
               {recentItem('react-native')}
               </div>

               <p style={{color:'#0A66C2',marginTop:20,fontSize:13}}>Groups</p>
               <div className='sidebar__recent'>
               {recentItem('programmingschool')}
               {recentItem('hellocoders')}
               {recentItem('learnwith__javascript')}
               {recentItem('android studio')}
               {recentItem('flutter dev')}
               </div>

               <p style={{color:'#0A66C2',marginTop:20,fontSize:13}}>Events</p>
               <div className='sidebar__recent'>
               {recentItem('programming')}
               {recentItem('developer')}
               {recentItem('frontend_developer')}
               {recentItem('software__developer')}
               </div> 
               <div className='sidebarRecent__bottom'>
                <h2 style={{color:'gray',fontSize:15,fontWeight:400,alignSelf:'center',padding:10}}>Discover more</h2>
                </div>    
           </div>
         
        </div>
    );
};

export default Sidebar;
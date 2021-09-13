import React from 'react';
import './Messaging.css';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AttachmentSharpIcon from '@material-ui/icons/AttachmentSharp';
import GifSharpIcon from '@material-ui/icons/GifSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';

const Messaging = () => {
    return (
        <div className='messaging'>
            <div className='messaging__left'>
                <div className='messagingLeftSidebar__left'>
                 <div className='sidebarTop__option'>
                     <h1 style={{fontSize:15,fontWeight:500,color:'gray'}}>Messaging</h1>
                     <div className='sidebarTopIcon__option'>
                        <EditIcon style={{color:'gray',cursor:'pointer',marginRight:5}}/>
                        <MoreHorizIcon style={{color:'gray',cursor:'pointer',marginLeft:5}}/>
                     </div>
                     
                 </div>
                 <input placeholder='Search messages'/>
                 <div className='sidebarBottom__option'>
                     <h1 style={{color:'gray',fontSize:14,fontWeight:500,alignSelf:'center'}}>No messages…yet!</h1>
                     <h1 style={{color:'gray',fontSize:14,fontWeight:300,alignSelf:'center',marginTop:50,textAlign:'center'}}>Reach out and start a conversation.</h1>
                     <h1 className='start__message' style={{color:'#C2A3E6',fontSize:14,fontWeight:500,alignSelf:'center',marginTop:40}}>Start a new message</h1>
                     <h1 className='load__conversation' style={{color:'gray',fontSize:14,fontWeight:500,alignSelf:'center',marginTop:20}}>Load more conversations</h1>
                 </div>
                </div>

                <div className='messagingLeftSidebar__right'>
                    <div className='messagingRight__top'>
                        <h1 style={{fontSize:15,fontWeight:500,color:'gray'}}>New message</h1>
                    </div>
                    <div className='messagingRight__middle'>
                        <input placeholder='Type a number or multiple name'/>
                    </div>
                    <div className='messagingRight__bottom'>
                        <div className='messagingRightBottom__top'>
                            <input style={{outline:'none',border:'none',padding:5}} placeholder='Write a message...'/>
                            <IconButton style={{color:'gray',marginLeft:'auto',cursor:'pointer'}}>
                            <ExpandLessIcon />
                            </IconButton>   
                        </div>
                        <div className='messagingRightBottom__bottom'>
                            <div className='messagingRightBottomBottom__left'>
                                <IconButton>
                                    <ImageOutlinedIcon/>
                                </IconButton>
                                <IconButton>
                                    <AttachmentSharpIcon/>
                                </IconButton>
                                <IconButton>
                                    <GifSharpIcon/>
                                </IconButton>
                                <IconButton>
                                    <SentimentSatisfiedSharpIcon/>
                                </IconButton>
                                <IconButton>
                                    <VideoCallSharpIcon/>
                                </IconButton>
                            </div>
                            <div className='messagingRightBottomBottom__right'>
                                <button style={{cursor:'not-allowed',backgroundColor:'lightgray',color:'gray',textDecorationColor:'gray',height:20,borderRadius:10,outlineWidth:0,border:'none'}}>Send</button>
                                <IconButton>
                                <MoreHorizIcon style={{cursor:'pointer',color:'gray'}}/>
                                </IconButton>
                                
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
            <div className='messaging__right'>
                <div className='messageRightImage__container'>
                    <img style={{height:300,width:300,cursor:'pointer'}} src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'/>
                </div>
                <div className='messageRight__bottom'>
                    <div className='messageRightBottom__option'>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>About</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Accessibility</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Help center</h1>
                    </div>
                    <div className='messageRightBottom__option'>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>About</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Accessibility</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Help center</h1>
                    </div>
                    <div className='messageRightBottom__option'>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>About</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Accessibility</h1>
                        <h1 style={{fontSize:13,fontWeight:300,margin:8,color:'gray'}}>Help center</h1>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Messaging;
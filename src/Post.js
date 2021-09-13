import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Post.css';
import InputOption from './InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Modal from 'react-modal';
import Dialog from './Dialog';
import Popup from './Popup';


const Post = ({name,description,message,photourl}) => {
    const [open,setOpen] = useState(false);
   
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar/>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p style={{color:'gray'}}>{description}</p>
                </div>
                <IconButton style={{marginLeft:'auto'}} onClick={()=> setOpen(true)}>
                <MoreHorizIcon/>
                </IconButton>
                
            </div>

            <div className='post__body'>
                <p style={{fontSize:13,color:'gray'}}>{message}</p>
            </div>
            <div className='post__buttons'>
                <InputOption Icon={ThumbUpAltIcon} title='Like' color='gray'/>
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray'/>
                <InputOption Icon={ShareIcon} title='Share' color='gray'/>
                <InputOption Icon={SendIcon} title='Send' color='gray'/>
            </div>
            <Popup open={open} onClose={()=> setOpen(false)}/>
        </div>
    );
};

export default Post;
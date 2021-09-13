import React, { useState } from 'react';
import './Dialog.css';

const Dialog = () => {
    const [dialog,setDialog] = useState(false);
    return (
       <div className='dialog'>
            <p style={{cursor:'pointer'}}>follow</p>
            <p style={{cursor:'pointer'}}>Unfollow</p>
            <p style={{cursor:'pointer'}}>Block</p>
            <p style={{cursor:'pointer'}}>Subscribe</p>
            <button>X</button>
         </div> 
    );
};

export default Dialog;
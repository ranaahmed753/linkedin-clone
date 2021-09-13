import React from 'react';
import './JobsBottomLastOption.css';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const JobsBottomLastOption = ({image,location,profession}) => {
    return (
        <div className='jobsBottomLastOption'>
            <div className='jobsBottomLastOption__top'>
                <img style={{cursor:'pointer'}} alt='' src={image}/>
                <BookmarkBorderIcon style={{cursor:'pointer',color:'gray'}} className='bookmarkBorder'/>
            </div>
            <div className='jobsBottomLastOption__middle'>
                <h1 style={{fontSize:14,fontWeight:400}}>{profession}</h1>
                <h1 style={{fontSize:13,fontWeight:300,color:'gray'}}>Transperfect</h1>
                <h1 style={{fontSize:13,fontWeight:300,color:'gray'}}>{location}</h1>
            </div>
            <div className='jobsBottomLastOption__last'>
                <h1 style={{fontSize:12,fontWeight:200,color:'gray'}}>Actively recruiting</h1>
                <h1 style={{fontSize:12,fontWeight:200,color:'gray'}}>Promoted-<span style={{color:'green',fontWeight:400}}> 20 applicants</span></h1>
            </div>
        </div>
    );
};

export default JobsBottomLastOption;
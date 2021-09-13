import React from 'react';
import './Jobs.css';
import JobsTopOption from './JobsTopOption';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';
import JobsBottomTopOption from './JobsBottomTopOption';
import { Avatar, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import JobsBottomLastOption from './JobsBottomLastOption';




const Jobs = () => {
    return (
        <div className='jobs'>
            <div className='jobs__top'>
                <JobsTopOption Icon={BookmarkIcon} title='My Jobs'/>
                <JobsTopOption Icon={NotificationsIcon} title='Jobs Alert'/>
                <JobsTopOption Icon={CreditCardIcon} title='Salary'/>
                <JobsTopOption Icon={AssignmentTurnedInIcon} title='Skill Assessments'/>
                <div className='jobsTopRight__option'>
                    <h1 style={{fontSize:14,fontWeight:400,color:'gray',marginLeft:5,cursor:'pointer'}}>More</h1>
                   <ArrowDropDownIcon style={{cursor:'pointer',color:'gray'}}/>
                </div>
                
                <button>Post a free job</button>
                     
            </div>
            <div className='jobs__middle'>
            <h1 style={{alignSelf:'center',fontSize:19,fontWeight:300,marginTop:30}}>Search for your next job</h1>
                <div className='jobsMiddle__option'>
                    <input placeholder='Search by title,skill or company'/>
                    <input placeholder='City,state or zip code'/>
                    <button>Search</button>
                </div>
            </div>
            <div className='jobs__bottom'>
                <div className='jobsBottom__top'>
                    <h1 style={{fontSize:16,fontWeight:500}}>Jobs Searches</h1>
                    <div className='jobsBottomTop__option'>
                        <JobsBottomTopOption developer='react' location='bangladesh'/>
                        <JobsBottomTopOption developer='flutter developer' location='rajshahi,bangladesh'/>
                        <JobsBottomTopOption developer='react native' location='pabna,bangladesh'/>
                    </div>
                </div>
                <div className='jobsBottom__middle'>
                    <Avatar src='https://media3.s-nbcnews.com/j/newscms/2019_22/2873986/190528-work-job-burnout-ac-440p_8c8009563e9037db7ff936167eb00a7b.social_share_1024x768_scale.jpg' style={{cursor:'pointer'}}/>
                    <div className='jobsBottomMiddle__option'>
                        <h1 style={{fontSize:15,fontWeight:400,color:'gray'}}>Try Premium to see jobs where you would be a top applicant</h1>
                        <h1 style={{fontSize:12,fontWeight:200}}>Millions of members use Premium</h1>
                        <button>Try Free for 1 Month</button>
                    </div>
                   
                   <MoreHorizIcon className='moreHoriz' style={{marginLeft:'auto',color:'gray',cursor:'pointer'}}/>
                  
                   
                </div>
                <div className='jobsBottom__last'>
                    <h1 style={{fontSize:15,fontWeight:500}}>Recommended for you</h1>
                    <h1 style={{fontSize:14,fontWeight:300}}>Based on your profile and search history</h1>
                    <div className='jobsBottomLast__option'>
                        <JobsBottomLastOption
                            image='https://media-exp1.licdn.com/dms/image/C4D0BAQGYECbt8La6hQ/company-logo_200_200/0/1615221424934?e=1625097600&v=beta&t=tpg0d6fcsQf2Yl95CyH2PChga15kpnR5_j7MOKesElk'
                            location='Dhaka,Bangladesh'
                            profession='Data Collection'
                        />
                        <JobsBottomLastOption
                            image='https://media-exp1.licdn.com/dms/image/C4D0BAQGYECbt8La6hQ/company-logo_200_200/0/1615221424934?e=1625097600&v=beta&t=tpg0d6fcsQf2Yl95CyH2PChga15kpnR5_j7MOKesElk'
                            location='Rajshahi,Bangladesh'
                            profession='Data Entry Specialist'
                        />
                    </div>
                    <h1 className='jobsBottomLastOption__h1' style={{alignSelf:'center',fontSize:15,fontWeight:500,cursor:'pointer',color:'#2476c8',marginTop:20}}>Search for more job</h1>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
import React from 'react';
import './MyNetwork.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ContactsIcon from '@material-ui/icons/Contacts';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import GroupIcon from '@material-ui/icons/Group';
import EventIcon from '@material-ui/icons/Event';
import PagesIcon from '@material-ui/icons/Pages';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import MyNetworkSidebarOption from './MyNetworkSidebarOption';
import Connection from './Connection';


const MyNetwork = () => {
    return (
        <div className='mynetwork'>
            <div className='myNetwork__sidebar'>
                <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer'}}>Manage My Network</h1>
                <MyNetworkSidebarOption Icon={SupervisorAccountIcon} title='Connection'/>
                <MyNetworkSidebarOption Icon={ContactsIcon} title='Contacts'/>
                <MyNetworkSidebarOption Icon={NaturePeopleIcon} title='People|Follow'/>
                <MyNetworkSidebarOption Icon={GroupIcon} title='Group'/>
                <MyNetworkSidebarOption Icon={EventIcon} title='Events'/>
                <MyNetworkSidebarOption Icon={PagesIcon} title='Pages'/>
                <MyNetworkSidebarOption Icon={CardMembershipIcon} title='Newsletters'/>
                
            </div>
            <div className='myNetwork__feed'>
                <div className='myNetworkFeed__top'>
                    <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer',alignItems:'center'}}>No Pending Invitation</h1>
                    <h1 style={{color:'gray',fontSize:13,fontWeight:200,padding:15,cursor:'pointer',marginLeft:'auto',alignItems:'center'}}>Manage</h1>
                </div>
                <div className='myNetworkFeed__bottom'>
                    <div className='myNetworkFeedOption__top'>
                        <h1 style={{color:'gray',fontSize:13,fontWeight:300,padding:15,cursor:'pointer'}}>Industry leaders in Bangladesh you may know</h1>
                        <h2 style={{color:'gray',fontSize:13,fontWeight:300,padding:15,cursor:'pointer',marginLeft:'auto'}}>See all</h2>
                    </div>
                    <div className='myNetworkFeedOption__bottom'>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQG59suqdb7P7Q/profile-displayphoto-shrink_800_800/0/1599878772169?e=1622678400&v=beta&t=QJTSFoQptZa1nyBTLEjQ5yLil9CzLO95MhTYtl09hBw' username='nazmul hossin nahid' backgroundUrl='https://cdn.wallpapersafari.com/47/58/bu724M.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4D03AQFILcmZKTVIQw/profile-displayphoto-shrink_800_800/0/1584996719814?e=1622678400&v=beta&t=9cVwQcQ9LbwKncco8fD9oCFTAdPXKn5SnfOVNJvKCZo' username='Sayed Tariq-Ul Islam' backgroundUrl='https://marketplace.canva.com/EAD7TRhFbfg/1/0/800w/canva-simple-work-linkedin-banner-o8RYd-hyoQI.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQFtfB5C7_a03g/profile-displayphoto-shrink_800_800/0/1603698530756?e=1622678400&v=beta&t=thldg58Y9NvMyS8DAz3xxcCSLZ5zpjva6dVIUp5O9bQ' username='Kamruzzaman Kamra' backgroundUrl='https://coverfiles.alphacoders.com/372/37275.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQEyeHu1hD29bg/profile-displayphoto-shrink_800_800/0/1603812491865?e=1622678400&v=beta&t=1EZVEAEQg55GJ4LT-H5hy-SmJE32xaWCcRmoNRlyHqc' username='Md.Ali Reza' backgroundUrl='https://cdn2.f-cdn.com/contestentries/1533674/32119186/5d260872e41bf_thumb900.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFAiFgJxEqyDQ/profile-displayphoto-shrink_800_800/0/1591281487777?e=1622678400&v=beta&t=ll5VPVc6yGjH58rRIit6ei583JYp-3UIxIxpA61vaP8' username='Alex Simon' backgroundUrl='https://skillroads.com/images/blog//blog/new/LinkedIn_background_photo_3.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQEERGcls7iyYQ/profile-displayphoto-shrink_800_800/0/1517276852585?e=1622678400&v=beta&t=I3U0MkRu3hhX6BaB1kEbWAouI68THfdsYWzAjF5oFJ0' username='David Jon' backgroundUrl='https://blackmorepartnersinc.com/wp-content/uploads/2017/06/chicago-skyline-linkedIn-background.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4D03AQHqIm_B03qgHQ/profile-displayphoto-shrink_800_800/0/1604268594312?e=1622678400&v=beta&t=UgeE5cIHz0QRiYgNtGWcrDoy8lXSr30B86H5RR2Ws8c' username='Mahtab Asadzadeh' backgroundUrl='https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4D03AQGezHQiEOl-hA/profile-displayphoto-shrink_800_800/0/1563194372825?e=1622678400&v=beta&t=iWD99q9eCbypRA-W7xsiTK4_lXmGtppfMVbwbAyLY0Y' username='Mona Bagheri' backgroundUrl='https://i0.wp.com/arielle.com.au/wp-content/uploads/2016/04/mountain-ranges-dark-1.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQF7NYOfJl9YmQ/profile-displayphoto-shrink_800_800/0/1605362645496?e=1622678400&v=beta&t=7iJEAVxmgp78uBGa35QEBoBNjnRIFt6L1SYGKfWpAm4' username='Mohadeseh Alizadeh' backgroundUrl='https://eunethta.eu/wp-content/uploads/2020/05/Abstract_0031.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4D03AQEjafe14b4xNA/profile-displayphoto-shrink_800_800/0/1610277071739?e=1622678400&v=beta&t=r_OZqGOZDDOr1ee3CtBErC6r6G8LOOGAREPfZ9YH_vs' username='Negin Sakian' backgroundUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8DiCEazE1fro5nn23EWyc8iWS_DuaE2V3AP8zXbsF3j6v3gT5RcaGhU26tLWWpAnSw&usqp=CAU'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C4E03AQHg1k5JeTI2Lg/profile-displayphoto-shrink_800_800/0/1603546318747?e=1622678400&v=beta&t=WbVS4__KXarOJpxVsoDXpWxielaNg7S5YZUm28uHJlA' username='Shahrzad Rafieyan' backgroundUrl='https://freelinkedinbackgrounds.com/wp-content/uploads/2014/12/Nature-008.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQEyeHu1hD29bg/profile-displayphoto-shrink_800_800/0/1603812491865?e=1622678400&v=beta&t=1EZVEAEQg55GJ4LT-H5hy-SmJE32xaWCcRmoNRlyHqc' username='Parisa Alizadeh' backgroundUrl='https://coverfiles.alphacoders.com/864/86411.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQFAiFgJxEqyDQ/profile-displayphoto-shrink_800_800/0/1591281487777?e=1622678400&v=beta&t=ll5VPVc6yGjH58rRIit6ei583JYp-3UIxIxpA61vaP8' username='zeinab hosseini' backgroundUrl='https://cdn.wallpapersafari.com/67/16/ySsXCR.jpg'/>
                        <Connection imageUrl='https://media-exp1.licdn.com/dms/image/C5603AQGfpNzNDZlVrw/profile-displayphoto-shrink_800_800/0/1540973624435?e=1622678400&v=beta&t=NhM6zXTAcyboBodyTPpaDO3J5nU0IEUF78bg9GzdqDs' username='Maryam Saghayi' backgroundUrl='https://i.pinimg.com/originals/01/47/bf/0147bfd9753a8633861c9905f6c0f89e.jpg'/>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default MyNetwork;
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
           
            <div className='header__left'>
                <img style={{cursor:'pointer'}} src='https://img.icons8.com/fluent/2x/linkedin.png' alt=''/>
                <div className='header__search'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className='header__right'>
                <NavLink exact activeClassName='active'  activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/'>
                 <HeaderOption Icon={HomeIcon} title='Home'/>
                </NavLink>
                <NavLink exact activeClassName='active' activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/mynetwork'>
                 <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                </NavLink>
                <NavLink exact activeClassName='active' activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/jobs'>
                 <HeaderOption Icon={WorkIcon} title='Jobs'/>
                </NavLink>
                <NavLink exact activeClassName='active' activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/messaging'>
                 <HeaderOption Icon={SmsIcon} title='Messaging'/>
                </NavLink>
                <NavLink exact activeClassName='active' activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/notifications'>
                 <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                </NavLink>
                <NavLink exact activeClassName='active' activeStyle={{color:'black'}} style={{textDecoration:'none'}} to='/profile'>
                  <HeaderOption avatar='https://i.insider.com/5d66d21e6f24eb396b6c8192?width=700' title='me'/>
                </NavLink>
                 
            </div>
        </div>
    );
};

export default Header;
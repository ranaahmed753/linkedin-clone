import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import MyNetwork from './MyNetwork';
import Jobs from './Jobs';
import Messaging from './Messaging';
import Notifications from './Notifications';
import Profile from './Profile';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
       <Header/>
       <Switch>
         <Route exact path='/'>
         <div className='app__body'>
           <Sidebar/>
           <Feed/> 
           <Widgets/>
         </div>
         </Route>
         <Route exact path='/mynetwork'>
           <MyNetwork/>
         </Route>
         <Route exact path='/jobs'>
           <Jobs/>
         </Route>
         <Route exact path='/messaging'>
           <Messaging/>
         </Route>
         <Route exact path='/notifications'>
           <Notifications/>
         </Route>
         <Route exact path='/profile'>
           <Profile/>
         </Route>
       </Switch>
      </BrowserRouter>
     
      

    </div>
  );
};

export default App;

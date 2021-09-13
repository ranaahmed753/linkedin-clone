import React from 'react';
import './JobsTopOption.css';



const JobsTopOption = ({Icon,title}) => {
    return (
        <div className='jobsTop__option'>
            <Icon style={{color:'gray',cursor:'pointer'}} src={Icon}/>
            <h1 style={{fontSize:14,fontWeight:400,color:'gray',marginLeft:5,cursor:'pointer'}}>{title}</h1>
         </div>
    );
};

export default JobsTopOption;
import { green } from '@material-ui/core/colors';
import React from 'react';
import './JobsBottomTopOption.css';

const JobsBottomTopOption = ({developer,location}) => {
    return (
        <div className='jobsBottomTopOption'>
            <h1 style={{fontSize:13,fontWeight:400}}>{developer} <span style={{color:'green',fontSize:13,fontWeight:400}}>(3 new)</span></h1>
            <h1 style={{fontSize:12,fontWeight:200,color:'gray'}}>{location}</h1>
        </div>
    );
};

export default JobsBottomTopOption;
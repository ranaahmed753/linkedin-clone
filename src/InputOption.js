import React from 'react';
import './InputOption.css'

const InputOption = ({Icon,title,color}) => {
    return (
        <div className='inputOption'>
           <Icon style={{color:color}}/>
           <h4 style={{fontSize:13,fontWeight:200,color:'gray'}}>{title}</h4>
        </div>
    );
};

export default InputOption;
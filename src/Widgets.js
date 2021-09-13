import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading,subtitle) => {
       return <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linkedin News</h2>
                <InfoIcon/>
            </div>
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
            {newsArticle('react is back','top news - 9099 readers')}
        </div>
    );
};

export default Widgets;
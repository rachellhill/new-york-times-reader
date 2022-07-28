import React from 'react';
import './Filter.css'

const Filter = ({ section, setSection }) => {

    const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate','science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
    
    const buttons = sections.map((section, index) => {
        return <button className='filter-btn' key={index} onClick={() => setSection(section)}>{section}</button>
    })

    return (
        <section className='filter-btns-container'>{buttons}</section>
    )
}

export default Filter;
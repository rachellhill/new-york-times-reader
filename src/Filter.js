import React from 'react';
import './Filter.css'

const Filter = ({ section, setSection }) => {

    const sections = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Insider', 'Magazine', 'Movies', 'nyregion', 'Obituaries', 'Opinion', 'Politics', 'realestate','Science', 'Sports', 'sundayreview', 'Technology', 'Theater', 't-magazine', 'Travel', 'Upshot', 'US', 'World']
    
    const buttons = sections.map((section, index) => {
        return <button className='filter-btn' key={index} onClick={() => setSection(section)}>{section}</button>
    })

    return (
        <section className='filter-btns-container'>{buttons}</section>
    )
}

export default Filter;
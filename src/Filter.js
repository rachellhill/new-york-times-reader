import React from 'react';
import './Filter.css'

const Filter = ({ section, setSection }) => {

    const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate','science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

    const buttons = sections.map((section, index) => {
        return <button key={index}>{section}</button>
    })

    const handleClick = (e) => {
        setSection(e.target.value)
        console.log(e.target.value)
    }

    return (
        <section onClick={handleClick}>{buttons}</section>
    )
}

export default Filter;
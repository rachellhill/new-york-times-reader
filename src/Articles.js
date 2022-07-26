import React from 'react';
import ArticleCard from './ArticleCard';
import './Articles.css';

const Articles = ({ articles }) => {
    console.log(articles)
    const articleCards = articles.map((article, index) => {
        return (
            <ArticleCard 
                {...article}
                key={index}
            />
        )
    })
}

export default Articles;
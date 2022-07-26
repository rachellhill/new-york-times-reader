import React from 'react';
import ArticleCard from './ArticleCard';
import './Articles.css';

const Articles = ({ articles }) => {
    console.log(articles)
    const articleCards = articles.map((article, index) => {
            <ArticleCard 
                {...article}
                key={index}
            />
    })

        return (
            <section>
                <h1>hi</h1>
                <div>{articleCards}</div>
            </section>
        )
    }


export default Articles;
import React from 'react';
import ArticleCard from './ArticleCard';
import './Articles.css';

const Articles = ({ articles }) => {
    console.log(articles)
    const articleCards = articles.map((article, index) => {
        return (
            <ArticleCard 
                title={article.title}
                key={index}
                abstract={article.abstract}
                multimedia={article.multimedia}
            />
        )
    })

        return (
            <section>
                <h1>hi</h1>
                <div>{articleCards}</div>
            </section>
        )
    }


export default Articles;
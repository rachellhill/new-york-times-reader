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
                byline={article.byline}
                abstract={article.abstract}
                published={article.published_date}
                lastUpdated={article.updated_date}
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
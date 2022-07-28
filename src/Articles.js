import React from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = ({ articles }) => {
    console.log(articles)
    const articleCards = articles.map((article, index) => {
        return (
            <Link to={`/article/${index}`} style={{textDecoration: 'none', color: 'black', fontFamily: 'Lora'}} className='article-card' key={index}>
                <ArticleCard 
                    title={article.title}
                    abstract={article.abstract}
                    multimedia={article.multimedia}
                />
            </Link>
        )
    })

        return (
            <div className='articles-container'>{articleCards}</div>
        )
    }


export default Articles;
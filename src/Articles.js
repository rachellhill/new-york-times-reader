import React from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import './Articles.css';

const Articles = ({ articles }) => {
    console.log(articles)
    const articleCards = articles.map((article, index) => {
        return (
            <Link to={`/article/${index}`} key={index}>
                <ArticleCard 
                    title={article.title}
                    abstract={article.abstract}
                    multimedia={article.multimedia}
                />
            </Link>
        )
    })

        return (
            <section>
                <div>{articleCards}</div>
            </section>
        )
    }


export default Articles;
import React from 'react';

const ArticleCard = ({ title, byline, abstract, published, lastUpdated }) => {
   
   return (
        <article className='article-card'>
            <h2>{title}</h2>
        </article>
    )
}

export default ArticleCard; 
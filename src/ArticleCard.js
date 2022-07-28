import React from 'react';

const ArticleCard = ({ title, abstract, multimedia }) => {
    let images = multimedia ? <img src={multimedia[1].url} alt={multimedia[1].caption} className='article-img'/> : null
   
   return (
        <article>
            <h2 className='article-card-text'>{title}</h2>
            {images}
            <p className='article-card-text'>{abstract}</p>
        </article>
    )
}

export default ArticleCard; 
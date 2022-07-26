import React from 'react';

const ArticleCard = ({ title, abstract, multimedia }) => {
    let images = multimedia ? <img src={multimedia[1].url} alt={multimedia[1].caption} className='article-img'/> : null
   
   return (
        <article className='article-card'>
            <h2>{title}</h2>
            {images}
            <p>{abstract}</p>
        </article>
    )
}

export default ArticleCard; 
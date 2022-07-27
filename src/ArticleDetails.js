import React from 'react';
import './ArticleDetails.css';

const ArticleDetails = ({ articles, id }) => {
    const idNum = parseInt(id)
    const selectedArticle = articles.find((article, index) => {
        return index === idNum
    })
    console.log("selected article", selectedArticle)

    return (
        <div>
            <h1>Article Page</h1>
            <p>{selectedArticle.title}</p>
        </div>
    )
}

export default ArticleDetails;
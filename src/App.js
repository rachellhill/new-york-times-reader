import './App.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import Nav from './Nav'

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nhMjxLLY9q8nUWSK6HWsK65vMVRqNkUi'
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setArticles(articles.results)
    } catch(error) {
      // remove error - add error handling
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Nav /> 
      <Articles 
        articles={articles}
      />
    </div>
  )
}

export default App;

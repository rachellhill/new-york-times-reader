import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=nhMjxLLY9q8nUWSK6HWsK65vMVRqNkUi'
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setArticles(articles)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
}

export default App;

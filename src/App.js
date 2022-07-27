import './App.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import Nav from './Nav'
import Filter from './Filter';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState('');

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

  // filter component with each section as a button and if the button is clicked, it will fetch and display those 

  const filterArticles = () => {
    // create a use effect that watches 
  }

  return (
    <div>
      <Nav /> 
      <Filter 
        section={section}
        setSection={setSection}
      />
      <Articles 
        articles={articles}
      />
    </div>
  )
}

export default App;

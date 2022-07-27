import './App.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import Nav from './Nav'
import Filter from './Filter';
import ArticleDetails from './ArticleDetails';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState('home');

  const fetchData = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=nhMjxLLY9q8nUWSK6HWsK65vMVRqNkUi`
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setArticles(articles.results)
      console.log(articles)
    } catch(error) {
      // remove error - add error handling
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [section])

  return (
    <div>
      <Nav /> 
      <Filter 
        section={section}
        setSection={setSection}
      />
      <Switch>
        <Route exact path='/'> 
          <Articles 
            articles={articles}
          />
        </Route>
        <Route exact path='/article/:id' render={({ match }) => <ArticleDetails id={ match.params.id } articles={articles}/>}>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

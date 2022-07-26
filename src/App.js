import './App.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import Nav from './Nav'
import Filter from './Filter';
import ArticleDetails from './ArticleDetails';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState('home');
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=nhMjxLLY9q8nUWSK6HWsK65vMVRqNkUi`
    try {
      const response = await fetch(url)
      const articles = await response.json()
      setArticles(articles.results)
      console.log(articles)
    } catch(error) {
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [section])

  return (
    <div>
      <Nav /> 
      {isError ? <Error /> : 
      <Switch>
        <Route exact path='/'> 
          <Filter 
            section={section}
            setSection={setSection}
          />
          <Articles 
            articles={articles}
          />  
        </Route>
        <Route exact path='/article/:id' render={({ match }) => <ArticleDetails id={ match.params.id } articles={articles}/>}>
        </Route>
      </Switch>
      }
    </div>
  )
}

export default App;

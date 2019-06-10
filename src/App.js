import React from 'react';
import {Route, Link} from 'react-micro-router';
import './App.css';
import Home from './components/Home';
import Search from './components/Search'


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>{' '}
      <Link to="/search">Search</Link>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/search">
        <Search/>
      </Route>
    </div>
  );
}

export default App;

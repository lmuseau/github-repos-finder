import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/search' exact component={Search} />
    </Router>
  )
}

export default App;

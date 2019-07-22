import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';
const App = () => (
  <div>
    <Navigation/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/navigation" component={Navigation}/>
  </div>
);

export default App;

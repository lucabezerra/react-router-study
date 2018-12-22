import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Meme from './Meme';


class App extends Component {
  render() {
    const memeUrl = "http://weknowmemes.com/wp-content/uploads/2014/09/frisky-fred-meme.jpg";
    
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <BrowserRouter>
          <div>
            <ul>
              <li><NavLink to='/' exact activeClassName='selected'>Home</NavLink></li>
              <li><NavLink to='/meme' activeClassName='selected'>Meme</NavLink></li>          
              <li><NavLink to='/nothing' activeClassName='selected'>Nothing</NavLink></li>          
            </ul>
            <Switch>
              <Route exact path='/meme' render={props => <Meme url={memeUrl} {...props} />} />
              <Route exact path='/nothing' render={() => <div>NOTHING TO SEE HERE.</div>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

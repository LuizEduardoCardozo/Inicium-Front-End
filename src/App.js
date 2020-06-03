import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {GlobalStyle} from './styles';

import Header from './components/header';
import MainContent from './components/main-content';
import Footer from './components/footer';

import CreatePost from './components/create-post';

import api from './services/api';

const posts = api;

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><MainContent data={posts}/></Route>
          <Route path="/create"><CreatePost /></Route>
        </Switch>
        <GlobalStyle />
    
        </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;

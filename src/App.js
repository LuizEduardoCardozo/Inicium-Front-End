import React from 'react';

import {GlobalStyle} from './styles';

import Header from './components/header';
import MainContent from './components/main-content';
import Footer from './components/footer';

import api from './services/api';

const posts = api;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
          <Header />
          <MainContent data={posts} />
          <Footer />
      </div>  
    </>
  );
}

export default App;

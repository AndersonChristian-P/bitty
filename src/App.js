import React from 'react';
import { HashRouter } from 'react-router-dom';

import router from './router';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// import './App.scss';

function App() {
  return (
    <HashRouter>
      <Header />
      {router}
      <Footer />
    </HashRouter>
  );
}

export default App;

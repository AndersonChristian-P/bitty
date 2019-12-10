import React from 'react';
import { HashRouter } from 'react-router-dom';

import router from './router';

// import './App.scss';

function App() {
  return (
    <HashRouter>
      {router}
    </HashRouter>
  );
}

export default App;

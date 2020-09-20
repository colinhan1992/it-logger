import React, { useEffect, Fragment } from 'react';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar></Searchbar>
      <div className="container">
        <Logs></Logs>
      </div>
    </Fragment>
  );
}

export default App;

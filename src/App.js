import React, { useEffect, Fragment } from 'react';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar></Searchbar>
        <div className="container">
          <AddBtn></AddBtn>
          <AddLogModal></AddLogModal>
          <EditLogModal></EditLogModal>
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
          <Logs></Logs>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;

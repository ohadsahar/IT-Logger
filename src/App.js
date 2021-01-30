import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import AddButton from './components/layout/AddButton';
import Navbar from './components/layout/Navbar';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import Logs from './components/logs/Logs';
import AddTechModal from './components/techs/AddTechModal';
import EditTechModal from './components/techs/EditTechModal';
import TechListModal from './components/techs/TechListModal';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
   
          <Logs />
     
        </div>
        <TechListModal />
        <EditTechModal />
      </Fragment>
    </Provider>
  );
}

export default App;

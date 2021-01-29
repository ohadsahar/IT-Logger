import React, { Fragment, useEffect } from 'react';
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
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

          <Logs />
          <AddButton />
        </div>
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </Fragment>
    </Provider>
  );
}

export default App;

import React from 'react';
import './assets/dist/css/animate.css';
import './assets/plugins/bootstrap-slider/slider.css';
import './assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';
import './assets/dist/css/skins/default.css';
import './assets/dist/css/glovia.css';
import './assets/dist/css/glovia-responsive.css';
import './assets/plugins/themify/css/themify.css';
import './assets/plugins/font-awesome/css/font-awesome.min.css';
import './assets/plugins/sweetalert/css/sweetalert.css';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import 'react-activity/dist/react-activity.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/arya-green/theme.css'
import 'primereact/resources/themes/saga-green/theme.css'

import Routes from './Routes';
// import io from 'socket.io-client';
// const socket = io(process.env.REACT_APP_API_URL);
import './App.css';

if (localStorage.getItem('auth')) {
  store.dispatch({
    type: 'SET_AUTH_STATE',
    payload: JSON.parse(localStorage.getItem('auth'))
  })
}

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  );
}

export default App;

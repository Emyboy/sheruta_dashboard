import React from 'react';
import logo from './logo.svg';
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
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Properties from './pages/Properties/Properties';
import PageNotFound from './pages/PageNotFount';
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Messages from './pages/Messages/Messages';
import 'react-activity/dist/react-activity.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/arya-green/theme.css'
import 'primereact/resources/themes/saga-green/theme.css'
import { SubmitProperty } from './pages/SubmitProperty/SubmitProperty';

if (localStorage.getItem('auth')) {
  store.dispatch({
    type: 'SET_AUTH_STATE',
    payload: JSON.parse(localStorage.getItem('auth'))
  })
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/submit/property" component={SubmitProperty} />
          <Route exact path="/signup/:token" component={Signup} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import erro404 from 'pages/Erro/e404';
import Dashboard from 'pages/Dashboard/Home';
import Create from 'pages/Dashboard/Create';
import Home from 'pages/Home';
import Login from 'pages/Login';
import RecoveryPassword from 'pages/RecoveryPassword';
import Post from 'pages/Dashboard/Post';
import Posts from 'pages/Dashboard/Posts';
import Settings from 'pages/Dashboard/Settings';
import './global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/recovery-password" component={RecoveryPassword} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/dashboard/posts" component={Posts} exact />
      <Route path="/dashboard/post/:id" component={Post} exact />
      <Route path="/dashboard/create" component={Create} exact />
      <Route path="/dashboard/settings" component={Settings} exact />
      <Route path="*" component={erro404} exact />
    </Switch>
  </BrowserRouter>
);

export default App;

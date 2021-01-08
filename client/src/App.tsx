import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import erro404 from 'pages/Erro/e404';
import Home from './pages/Home';
import Login from './pages/Login';
import RecoveryPassword from './pages/RecoveryPassword';
import Dashboard from './pages/Dashboard';
import './global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/recovery-password" component={RecoveryPassword} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={erro404} />
    </Switch>
  </BrowserRouter>
);

export default App;

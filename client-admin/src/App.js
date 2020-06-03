import React from 'react';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

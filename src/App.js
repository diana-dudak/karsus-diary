import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import LockScreen from './pages/LockScreen';
import LogsList from './pages/LogsList';
import Log from './components/Log';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route exact path="/lock">
            <LockScreen />
          </Route>
          <Route exact path="/">
            <LogsList />
          </Route>
          <Route path="/log/:id">
            <Log>
            </Log>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

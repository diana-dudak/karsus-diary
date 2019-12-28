import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import LockScreen from './pages/LockScreen';
import LogsList from './pages/LogsList';

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
        </Switch>
      {/*   <p>
          <Link to="/">Lock</Link>
        </p>
        <p>
          <Link to="/logs">Logs</Link>
        </p> */}
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "App.css";
import MainBar from "components/MainBar";
import Home from "components/Home";
import Team from "components/Team";
import Quarter from "components/Quarter";
import { ReactKeycloakProvider } from "@react-keycloak/web";
 
import keycloak from "keycloak";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
    <div className="App">
      <MainBar />
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/team/:id">
              <Team />
            </Route>
            <Route path="/quarter/:id">
              <Quarter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
    </ReactKeycloakProvider>
  );
}

import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MoviePage } from "./components/MoviePage";
import Main from "./components/Main"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>hello</h1>
          </Route>
          <Route path="/movie/:id" component={MoviePage} />

          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

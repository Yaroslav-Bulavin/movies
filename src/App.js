import React from "react";
import "./index.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Main} from "./components/Main";
import {MoviePage} from "./components/MoviePage";


function App() {

  return (
      <>
        <Router>
          <Switch>

              <Route path="/about">
                  <h1>hello</h1>
              </Route>
              <Route path="/movie/:id" component={MoviePage}/>

              <Route path="/" component={Main}/>

          </Switch>
        </Router>
      </>
  );
}

export default App;


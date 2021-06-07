import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MoviePage } from "./components/MoviePage";
import Main from "./components/Main"
import Whishlist from "./components/Whishlist";
import {connect} from "react-redux";

function App({login}) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>hello</h1>
          </Route>
          <Route path="/movie/:id" component={MoviePage} />

          {login ? <Route path="/whishlist" component={Whishlist}/> : <Route path="/" component={Main} />}

          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.movies.login.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);

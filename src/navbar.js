import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Todo from "./todo";
import Item from "./item";
export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <a className="navbar-brand" href="#">
            Practice
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/item">
                    <a className="nav-link" href="#">
                      Item
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/todo">
                    <a className="nav-link" href="#">
                      Todo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>  
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/item">
              <Item />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
          <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
  </footer>
        </div>
      </Router>
    );
  }
}

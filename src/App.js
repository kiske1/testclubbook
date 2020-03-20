import React from "react";

import "./App.css";
import Testata from "./components/common/Testata";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import Book from "./components/book/Book";
import About from "./components/About";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Testata />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book" component={Book} />
        <Route path="/book/:slug" component={Book} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;

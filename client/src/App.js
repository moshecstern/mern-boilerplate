import React from "react";
import Books from "./pages/Books";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/books" component={Books} />
        <Route exact path="/signin" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

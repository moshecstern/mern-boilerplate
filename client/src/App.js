import React from "react";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Switch, Route} from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import Home from "./pages/Home";
import AppBar from "./components/AppBar";
import { Container, makeStyles } from "@material-ui/core";
import Footer from "./components/Material-ui/Footer"

const useStyles = makeStyles(theme => ({
  // bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  container: { backgroundColor: "#f6ef98" }
  // container: { backgroundColor: "#F2F2F2" }    floralwhite;
  
  
}));
function App() {
  const classes = useStyles();
  return (
    <>
    <Router>
    <Container className={classes.container}>
    {/* <BrowserRouter> */}
    <AppBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home/:name" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/books" component={Books} />
        <Route exact path="/signin" component={Login}/>
      </Switch>
    {/* </BrowserRouter> */}
    <Footer title="Footer" description="Something here to give the footer a purpose!" />

    </Container>
      </Router>
    </>
  );
}

export default App;

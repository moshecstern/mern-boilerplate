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
import AppForm from "./components/AppForm/AppForm"
import Userprofile from "./pages/Userprofile/index"

const useStyles = makeStyles(theme => ({
  // bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  container: { backgroundColor: "#f6ef98" },
  bg: {backgroundColor: "green" }
  // container: { backgroundColor: "#F2F2F2" }    floralwhite;
  
  
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
    <Container className={classes.container}>
    <Router>
    <div>
    <AppBar />
      <Switch className={classes.container}>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/userprofile" component={Userprofile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/signin" component={Login} />
      </Switch>

    <Footer title="Moshe Stern" description="Something here to give the footer a purpose!" />
    </div>
      </Router>
    </Container>
    </div>
  );
}

export default App;

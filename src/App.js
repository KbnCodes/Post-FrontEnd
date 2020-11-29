import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/static/Home";

import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfileView from './components/ProfileView'

import Navbar from "./components/static/Navbar";
import AddPost from "./components/AddPost";
import PostView from "./components/PostView";

function App(props) {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/signup" component={Signup} />
        <Route path="/users/login" component={Login} />
        <Route exact path="/users/show" component={ProfileView}/>

        <Route path="/posts/show" component={PostView} />
        <Route path="/posts/add" component={AddPost}/>
      </Switch>
    </BrowserRouter>
  );
}


export default connect()(App)
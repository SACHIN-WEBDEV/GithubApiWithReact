import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserContext } from "./Context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
//firebase

import firebase from "firebase/app";
import "firebase/auth";
//pages
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firbaseConfig from "./Config/FirebaseConfig";
firebase.initializeApp(firbaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={NotFound} />
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;

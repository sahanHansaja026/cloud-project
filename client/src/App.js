import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom
import Home from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Reservation from "./components/reservation";
import Myreservaion from "./components/my_reservation";
import Signup from "./components/signup";
import Login from "./components/login";
import Wellcome from "./components/welcome";
import About from "./components/about";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" Component={Wellcome} />
            <Route exact path="/home" Component={Home} />
            <Route exact path="/reservation" Component={Reservation} />
            <Route exact path="/my_reservation" Component={Myreservaion} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/about" Component={About} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

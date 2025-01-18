import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Home from "./home";
import "../CSS/signup.css";
import Resturent from "../images/food5.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: { email: "", password: "" },
      loginSuccess: false,
      userEmail: "", // state to store user's email
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:7800/login", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("Login successful");
          alert("Login successful.");
          this.setState({
            loginSuccess: true,
            userEmail: this.state.newPost.email, // storing user's email in state
          });
        } else {
          console.error("Login failed:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Error. You are unauthorizied.");
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  }

  render() {
    if (this.state.loginSuccess) {
      return <Home email={this.state.userEmail} />;
    }

    return (
      <div>
        <div className="signup">
          <img src={Resturent} alt="Resturent" />
          <form onSubmit={this.handleSubmit}>
            <div className="title">
            Welcome Back! Let's Dive Into Deliciousness - Login Now!
            </div>
            <br />
            {/* this is email input */}
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.newPost.email}
                onChange={this.handleChange}
              />
            </label>
            {/* this is a password input */}
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.newPost.password}
                onChange={this.handleChange}
              />
            </label>
            New to Our Culinary World? Join Us Today! |
            <Link to="/signup">
              <font color="white">Sign up|</font>
            </Link>{" "}
            In!
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

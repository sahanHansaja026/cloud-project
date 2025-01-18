import React, { Component } from "react";
import axios from "axios";
import "../CSS/signup.css";
import { Link } from "react-router-dom";
import Resturent from "../images/food5.png";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: { name: "", email: "", password: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:7800/posts")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log("posts retrieved successfully:", this.state.posts);
        } else {
          console.log("Error fetching posts", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error fetching posts : ", error);
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

  handleSubmit(event) {
    event.preventDefault();
    const { name, email,password } = this.state.newPost;
  
    // Check if any of the required fields are empty
    if (!name ||!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    axios
      .post("http://localhost:7800/signup", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("post added successfully");
          alert("Signup is successful.");
          this.setState({
            newPost: { name: "", email: "", password: "" },
          });
          this.retrievePosts();
        } else {
          console.error("error adding post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error adding post:", error);
        alert("Error. Signup failed.");
      });
  }

  render() {
    return (
      <div className="signup">
        <img src={Resturent} alt="Resturent" />
        <form onSubmit={this.handleSubmit}>
          <div className="title">
            Join Us: Become Part of Our Culinary Community!
          </div>
          <br />
          {/* this is name input */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.newPost.name}
              onChange={this.handleChange}
            />
          </label>
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
          Already Have an Account? Let's Get You |
          <Link to="/login">
            <font color="white">Logged|</font>
          </Link>{" "}
          In!
          <br />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

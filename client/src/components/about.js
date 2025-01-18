import React, { Component } from "react";
import "../CSS/about.css";
import Food6 from "../images/food6.jpg";
import axios from "axios";

export default class about extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: { name: "", email: "", message: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.retrievePosts();
  }
  retrievePosts() {
    axios
      .get("http://localhost:7800/pos")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
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
    const { name, email, message } = this.state.newPost;
  
    // Check if any of the required fields are empty
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    axios
      .post("http://localhost:7800/comment/save", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("post added successfully");
          this.setState({
            newPost: { name: "", email: "", message: "" },
          });
          this.retrievePosts();
        } else {
          console.error("error adding post:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error adding post:", error);
      })
      .catch((error) => {
        console.error("error adding post", error);
      });
  }
  render() {
    return (
      <div>
        <div className="about">
          <div className="intro">
            <center>
              <h1>Crafting Culinary Excellence Since 2002 - 2024</h1>
            </center>
            <div className="with_image">
              <img src={Food6} alt="Example" />
              <p>
                Crafting Culinary Delights Since 2002. At Taste Trekker, we
                blend passion with expertise to create an unforgettable dining
                experience. From our carefully curated menus to our warm
                hospitality, we invite you to savor every moment with us.
                Explore the essence of taste, tradition, and innovation in every
                dish. Join us and embark on a journey where every bite tells a
                tale of culinary excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="comment">
          <h3>Customer Testimonials</h3>
          <form onSubmit={this.handleSubmit}>
            {/*this is name input*/}
            <br />
            <label>
              Name :
              <input
                type="text"
                name="name"
                value={this.state.newPost.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
            </label>
            {/*this is email input */}
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={this.state.newPost.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </label>
            {/*this is a message input */}
            <label>
              message:
              <textarea
                name="message"
                value={this.state.newPost.message}
                onChange={this.handleChange}
                placeholder="Message"
              />
            </label>
            <button type="submit">submit</button>
          </form>
          <div className="messages">
            {this.state.posts.map((post) => (
              <tr key={post._id}>
                <div className="name">
                  <b>{post.name}</b>
                </div>
                <br />
                <div className="drop_message">
                  <i>"{post.message}"</i>
                </div>
                <br />
              </tr>
            ))}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

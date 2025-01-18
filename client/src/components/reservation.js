import React, { Component } from "react";
import axios from "axios";
import "../CSS/reservation.css";
import Resturent from "../images/resturent.png";

export default class reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: {
        full_name: "",
        date: "",
        time: "",
        occasion: "",
        number_of_dinner: "",
        email: "",
        phone: "",
        requests: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.retrievPosts();
  }
  retrievPosts() {
    axios
      .get("http://localhost:7800/profile")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log("post retrived successully", this.state.posts);
        } else {
          console.log("error factching posts:", res.data.error);
        }
      })
      .catch((error) => {
        console.error("error fatching post:", error);
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
    const { full_name, date, time, occasion, number_of_dinner, email, phone } = this.state.newPost;
  
    // Check if any of the required fields are empty
    if (!full_name || !date || !time || !occasion || !number_of_dinner || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }
    axios
      .post("http://localhost:7800/post/save", this.state.newPost)
      .then((res) => {
        if (res.data.success) {
          console.log("post added successfully");
          alert("comform your reservation");
          this.setState({
            newPost: {
              full_name: "",
              date: "",
              time: "",
              occasion: "",
              number_of_dinner: "",
              email: "",
              phone: "",
              requests: "",
            },
          });
          this.retrievPosts();
        } else {
          console.error("error adding post", res.data.error);
        }
      })
      .catch((error) => {
        console.error("errpr addomg post:", error);
      })
      .catch((error) => {
        console.error("errpr addomg post:", error);
      });
  }
  render() {
    return (
      <>
        <div className="reservation">
            <div className="container1">
              <div className="content">
                <form onSubmit={this.handleSubmit}>
                  {/*this is book name input*/}
                  <div className="title">Reservation</div>
                  <br />
                  <label>
                    Client Name :
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      value={this.state.newPost.full_name}
                      onChange={this.handleChange}
                    />
                  </label>
                  <div className="form_sub">
                    <label>
                      Email :
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.newPost.email}
                        onChange={this.handleChange}
                      />
                    </label>
                    {/*this is isbn input */}
                    <label>
                      Phone Number:
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.newPost.phone}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <label>
                    Occasion:
                    <select
                      name="occasion"
                      value={this.state.newPost.occasion}
                      onChange={this.handleChange}
                    >
                      <option value="birthday">Birthday</option>
                      <option value="wedding">Wedding</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <div className="form_sub">
                  <label>
                    Number Of Dinner:
                    <input
                      type="number"
                      name="number_of_dinner"
                      placeholder="0000"
                      value={this.state.newPost.number_of_dinner}
                      onChange={this.handleChange}
                    />
                  </label>
                  {/*this is publication_date input */}
                  <label>
                    Time:
                    <input
                      type="time"
                      name="time"
                      value={this.state.newPost.time}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Date:
                    <input
                      type="date"
                      name="date"
                      value={this.state.newPost.date}
                      onChange={this.handleChange}
                    />
                  </label>
                  </div>
                  <label>
                    Special Requests:
                    <textarea
                      name="requests"
                      value={this.state.newPost.requests}
                      onChange={this.handleChange}
                      placeholder="requests"
                    />
                  </label>
                  <button type="submit">comform</button>
                </form>
              </div>
            </div>
            <img src={Resturent} alt="Resturent" />
        </div>

      </>
    );
  }
}

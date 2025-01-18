import React, { Component } from "react";
import "../CSS/App.css";
import App1 from "../images/app1.png";
import Food1 from "../images/food1.jpg";
import Food2 from "../images/food2.png";
import Food3 from "../images/food3.png";
import Cheff from "../images/chef.png";
import Vatter from "../images/vater.png";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="hero-image">
          <img src={App1} alt="Example" />
          <div class="hero-text">
            <h1>Taste Trekker</h1>
            <p>
              Your go-to destination for hassle-free restaurant reservations.
              Discover, book, and enjoy delicious dining experiences &
              effortlessly with our intuitive table booking system
            </p>
            <a className="btn" href="/Login">
              Signup / Login
            </a>
          </div>
        </div>
        <div className="main">
          <div className="content">
            <img src={Food1} alt="food 1" />
            <h3>Breakfirst</h3>
          </div>
          <div className="content">
            <h1>Experience Exquisite Offers</h1>
            <h3>
              <i>Reserve Your Table Today!</i>
            </h3>
            <img src={Food2} alt="food 2" />
            <h3>Lunch & Dinner</h3>
          </div>
          <div className="content">
            <img src={Food3} alt="food 3" />
            <h3>Drinks</h3>
          </div>
        </div>
        <div className="container">
          <center>
            <div className="box_type1">
              <h2>Reserve Your Culinary Adventure Today!</h2>
              <p>
                "Welcome to our table reservation system! Planning a special
                meal has never been easier. Just pick your date, time, and party
                size, and get ready for a delightful dining experience. No more
                waiting in line or last-minute disappointments. Reserve now and
                savor every moment!"
              </p>
            </div>
          </center>
          <center>
            <div className="box_type2">
              <h2>
                Elevate Your Dining Experience with Seamless Reservations!
              </h2>
              <p>
                "Join us on a culinary journey with our easy reservation system!
                No more waiting — just select your date, time, and party size,
                and let the unforgettable dining experience begin!"
              </p>
            </div>
          </center>
          <center>
            <h1> Inspiration Directly from the Culinary Genius</h1>
          </center>
          <br />
          <center>
            <div className="chef_box">
              <img src={Cheff} alt="Example" className="avatar" />
              <p>
                <i>
                  "Greetings! I'm Chef [Name], and I believe that great food
                  brings people together. Join us as we celebrate the art of
                  cooking and the joy of sharing delicious meals with loved
                  ones."
                </i>
              </p>
            </div>
            <br />
            <div className="vaiter_box">
              <p>
                <i>
                  "Hello and welcome to [Restaurant Name]! I'm [Your Name], your
                  guide through tonight's culinary adventure. Allow me to
                  recommend our chef's specialties and assist you in creating a
                  memorable dining experience."
                </i>
              </p>
              <img src={Vatter} alt="Example" className="avatar" />
            </div>
          </center>
          <br />
          <center>
            <div className="box_type1">
              <h2>Experience Excellence Beyond Dining</h2>
              <p>
                "At Taste Trekker, we're more than just great food. With our
                dedicated service and range of offerings, every visit is
                memorable. From personalized catering to private dining and
                curated wine pairings, we ensure an exceptional experience every
                time. Join us and see why we're a community favorite!"
              </p>
            </div>
          </center>
          <br />
        </div>
      </div>
    );
  }
}

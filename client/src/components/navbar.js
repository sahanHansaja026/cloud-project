import React, { Component } from "react";
import "../CSS/navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="my_reservation">My reservation</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
    );
  }
}

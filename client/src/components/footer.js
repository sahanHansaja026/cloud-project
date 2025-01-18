import React, { Component } from "react";
import "../CSS/footer.css";
import Food2 from "../images/food1.png";

export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <img src={Food2} alt="food 2" />
          <div className="box">
            Get connected with us on social networks:
            <div className="col-md-12">
              <a
                href="https://www.facebook.com"
                className="fa fa-facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://twitter.com"
                className="fa fa-twitter"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://www.google.com"
                className="fa fa-google"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://www.youtube.com"
                className="fa fa-youtube"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <a
                href="https://www.instagram.com"
                className="fa fa-instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Contaact</h3>
                <div className="dec">
                  <ul>
                    <li>
                      <i className="fa fa-home"></i> New York, NY 10012, US
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> info@example.com
                    </li>
                    <li>
                      <i className="fa fa-print"></i>+ 01 234 567 89
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="under">
          <i> © 2024 Copyright:</i>
          <b> MARK Technologies</b>
        </div>
      </div>
    );
  }
}

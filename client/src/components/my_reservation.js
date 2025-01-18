import React, { Component } from "react";
import "../CSS/my_reservation.css";
import food1 from "../foods/food1.jpg";
import food2 from "../foods/food2.jpg";
import food3 from "../foods/food3.jpg";
import food4 from "../foods/food4.jpg";
import food5 from "../foods/food5.jpg";

import food6 from "../foods/food6.jpg";
import food7 from "../foods/food7.jpg";
import food8 from "../foods/food8.jpg";
import food9 from "../foods/food9.jpg";
import food10 from "../foods/food10.jpg";

import food11 from "../foods/food11.jpeg";
import food12 from "../foods/food12.jpeg";
import food13 from "../foods/food13.jpeg";
import food14 from "../foods/food14.jpeg";
import food15 from "../foods/food15.jpeg";

export default class my_reservation extends Component {
  render() {
    return (
      <div>
        <div className="manue">
          <h3>Appetizers</h3>
          <div className="slideshow">
            {/*biging the card */}
            <div className="card">
              <img src={food1} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Buffalo Chicken Meatballs</b>
                </h4>
                450g $21
                <p>Perfect for appetizers or main dishes</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food2} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Stuffed Mushrooms</b>
                </h4>
                250g $10
                <p>Perfect as an appetizer</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food3} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Caprese Skewers</b>
                </h4>
                250g $10
                <p>Vegetarian-friendly</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food4} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Steamed Dumplings</b>
                </h4>
                250g $10
                <p>Served with soy dipping sauce</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food5} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Quesadillas</b>
                </h4>
                250g $10
                <p>Served with salsa, sour cream, and guacamole</p>
              </div>
            </div>
            {/*end of the card */}
          </div>
        </div>
        {/*anoter one begien */}

        <div className="manue">
          <h3>Soups</h3>
          <div className="slideshow">
            {/*biging the card */}
            <div className="card">
              <img src={food6} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Fresh tomato Soup</b>
                </h4>
                $5.99 per serving
                <p>Made from fresh, vine-picked tomatoes</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food7} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Mulligatawny Soup</b>
                </h4>
                $7.99 per serving
                <p>Fragrant and richly spiced</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food8} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Leek and Potato Soup</b>
                </h4>
                $6.99 per serving
                <p>Made with fresh, wholesome ingredients</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food9} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Pumpkin Soup</b>
                </h4>
                $6.99 per serving
                <p>Ideal as a starter or light meal</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food10} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Creamy Tortellini Minestrone</b>
                </h4>
                $8.99 per serving
                <p>Creamy twist on a classic Italian soup</p>
              </div>
            </div>
            {/*end of the card */}
          </div>
        </div>
         {/*anoter one begien */}

        <div className="manue">
          <h3>Sandwiches & Wraps</h3>
          <div className="slideshow">
            {/*biging the card */}
            <div className="card">
              <img src={food11} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Grilled Chicken Sandwich</b>
                </h4>
                $11.99 per serving
                <p>Customizable with your favorite toppings</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food12} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Vegetarian Wrap with Hummus</b>
                </h4>
                $9.99 per serving
                <p>Packed with vegetables and creamy hummus</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food13} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Classic BLT</b>
                </h4>
                $8.99 per serving
                <p>Perfect balance of crispy bacon and fresh vegetables</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food14} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Turkey Club Sandwich</b>
                </h4>
                $10.99 per serving
                <p>Ideal for lunch or dinner</p>
              </div>
            </div>
            {/*end of the card */}
            {/*biging the card */}
            <div className="card">
              <img src={food15} alt="Example" />
              <div className="cardcontainer">
                <h4>
                  <b>Caprese Panini</b>
                </h4>
                $9.99 per serving
                <p>Inspired by the classic Caprese salad</p>
              </div>
            </div>
            {/*end of the card */}
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

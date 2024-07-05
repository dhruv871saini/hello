import React from "react";
// import Home from "../../home/Home";
import { Link } from "react-router-dom";
import "./starter.css";

const Starter = () => {
  return (
    <div>
      
      <div class="d-flex">
        {" "}
        <div
          class="card"
          style={{ width: "20rem", marginTop: "100px", margin: "50px", marginLeft:"20px", margin:"20px" }}
        >
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Veg Mixer</h5>
            <p class="card-text">Tamato Salad & Carrot</p>
            <Link to="#" class="price">
              $5.99
            </Link>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "20rem", marginTop: "100px", margin: "50px", marginLeft:"20px", margin:"20px" }}
        >
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Veg Mixer</h5>
            <p class="card-text">Tamato Salad & Carrot</p>
            <Link to="#" class="price">
              $5.99
            </Link>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "20rem", marginTop: "100px", margin: "50px", marginLeft:"20px", margin:"20px"}}
        >
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Veg Mixer</h5>
            <p class="card-text">Tamato Salad & Carrot</p>
            <Link to="#" class="price">
              $5.99
            </Link>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "20rem", marginTop: "100px", margin: "50px", marginLeft:"20px", margin:"20px" }}
        >
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Veg Mixer</h5>
            <p class="card-text">Tamato Salad & Carrot</p>
            <Link to="#" class="price">
              $5.99
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starter;

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./home.css";
import PlayCircle02Icon from "./PlayCircle02Icon ";
import Section2 from "../section2/section2 navbar/Section2";

const Home = () => {
  return (
    <div>
        
<div className="container-fluid">
<div className="row">
  <div className="col-md-6 textbox1">
    <div className="display-5 fw-bolder text-capitalize text-1 bg-white">
      Delicious & Affordable
    </div>
    <div className="bg-purple fw-bolder display-4 p-3">
      Meals Near You.
    </div>
    <div className="lorem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
      fuga consequatur suscipit aspernatur delectus expedita, aut
      mollitia velit aperiam tempore.
    </div>
    <div className="bgs-purples rounded">Order now</div>
    <div className="svg">
      {/* Use the PlayCircle02Icon component directly */}
      <PlayCircle02Icon size={45} />
    </div>
  </div>

  <div className="col-md-6">
    <div>
      <img
        className="mainimg1"
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        alt="jjg"
      />
    </div>
  </div>
</div>
<Section2/>
</div>
      
    </div>
  )
}

export default Home


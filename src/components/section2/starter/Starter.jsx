import React, { useContext, useEffect, useState } from "react";
// import { Cartcontainer } from "../section2/Cartcontainer";
import Home from "../../home/Home";
import Cartcontainer, { Cartpro } from "../../cart/Cartcontainer";

// import Cartcontainer, { Cartpro } from "../section2/Cartcontainer";


const Starter = () => {
  const { addCart } = useContext(Cartcontainer);
  const [starters, setStarters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const mockStarters = [
      {
        name: "Tamato Salad & Carrot",
        price: "250 Rupees",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Veg Mixer",
      },
      {
        name: " Cheese Pizza",
        price: "200 Rupees",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Macaroni",
      },
      {
        name: " Hamsburger & fries",
        price: "280 Rupees",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Neili",
      },
      {
        name: "Jalapeno poppers ",
        price: "320 Rupees",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Cripsy soyabeans",
      },
      
    ];

    setStarters(mockStarters);
  };

  const handleClick = (starter) => {
    addCart(starter);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        {starters.map((starter, index) => (
          <div
            key={index}
            className="card"
            style={{ width: "20rem", marginTop: "100px", margin: "50px", marginLeft: "20px", margin: "20px" }}
          >
            <img className="card-img-top" src={starter.image} alt={starter.name} />
            <div className="card-body">
              <h5 className="card-title">{starter.name}</h5>
              <p className="card-text">{starter.description}</p>
              <button className="btn btn-primary" onClick={() => handleClick(starter)}>{starter.price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Starter;

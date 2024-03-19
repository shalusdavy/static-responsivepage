import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="product-container">
      <div className="product-conversation">
        <div className="product-content">
          <h2>Stirring Up Great Conversation Over Coffee!</h2>
          <p>
            From a variety of topics to choose from, every talk in the series
            has its flavor and intensity. Blend the flavor with the intensity
            you enjoy and get the conversation of your choice.
          </p>
        </div>
        <div className="product-details">
          <div className="product-details-info">
            <h2>Flavor</h2>
            <button className="product-details-button">
              {" "}
              <span class="material-symbols-outlined">biotech</span>Technology
            </button>
            <button>
              <span class="material-symbols-outlined">handshake</span>Business
            </button>
            <button>
              {" "}
              <span class="material-symbols-outlined">manage_search</span>
              Visionary
            </button>
          </div>
          <div className="product-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJAL7tS4zb6D0vObxlWumoeORohdGBIukDg&usqp=CAU"
              alt="img"
            />
          </div>
        </div>
        <div className="product-intensity">
          <h2 className="product-intensity-heading">Intensity</h2>
          <div className="product-more-info div">
            <div className="product-logo">
              <span class="material-symbols-outlined">local_cafe</span>
            </div>
            Mocha
            <p> light and realaxed talks for those who like easy-going conservations sprinkles with light </p>
          </div>
          <div className="product-more-info div">
            <div className="product-logo">
              <span class="material-symbols-outlined">local_cafe</span>
            </div>
            Americano
            <p> light and realaxed talks for those who like easy-going conservations sprinkles with light </p>
          </div>
          <div className="product-more-info div">
            <div className="product-logo">
              <span class="material-symbols-outlined">local_cafe</span>
            </div>
            Espresso
            <p> light and realaxed talks for those who like easy-going conservations sprinkles with light </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

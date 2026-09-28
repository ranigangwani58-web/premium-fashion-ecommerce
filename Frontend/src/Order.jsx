import React from "react";
import { useParams } from "react-router-dom";


const Order = () => {

  const { id } = useParams();


  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Order submitted successfully!");

  };


  return (
    <div className="order-page">

      <div className="order-box">

        <h1>
          Complete Your Order
        </h1>

        <p>
          Product ID: {id}
        </p>


        <form onSubmit={handleSubmit}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            required
          />


          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            required
          />


          <label>
            Address
          </label>

          <textarea
            placeholder="Enter your complete address"
            required
          ></textarea>


          <label>
            City
          </label>

          <input
            type="text"
            placeholder="Enter your city"
            required
          />


          <label>
            PIN Code
          </label>

          <input
            type="text"
            placeholder="Enter PIN code"
            required
          />


          <button type="submit">
            SUBMIT ORDER →
          </button>

        </form>

      </div>

    </div>
  );
};

export default Order;

import React from "react";
import { useParams, Link } from "react-router-dom";

import img1 from "./img1.jfif";
import img2 from "./img2.jfif";
import img3 from "./img3.jfif";
import img4 from "./img4.jfif";
import img5 from "./img5.jfif";
import img6 from "./img6.jfif";
import img7 from "./img7.jfif";
import img8 from "./img8.jfif";

import "./Home.css"

const Product = () => {

  // Get product ID from URL
  const { id } = useParams();

  // Product data
  const products = [

    {
      id: 1,
      image: img1,
      name: "Premium Fashion Dress",
      description: "Elegant fashion designed for everyday style.",
      price: 2999
    },

    {
      id: 2,
      image: img2,
      name: "Classic Fashion Outfit",
      description: "A modern outfit with a timeless look.",
      price: 2499
    },

    {
      id: 3,
      image: img3,
      name: "Modern Style Dress",
      description: "Designed to make a confident entrance.",
      price: 2799
    },

    {
      id: 4,
      image: img4,
      name: "Elegant Collection",
      description: "A beautiful combination of comfort and style.",
      price: 3199
    },

    {
      id: 5,
      image: img5,
      name: "Premium Evening Dress",
      description: "Perfect fashion for special moments.",
      price: 3499
    },

    {
      id: 6,
      image: img6,
      name: "Everyday Fashion",
      description: "Simple, comfortable and stylish.",
      price: 2299
    },

    {
      id: 7,
      image: img7,
      name: "Luxury Fashion Outfit",
      description: "Every detail is designed with elegance.",
      price: 3999
    },

    {
      id: 8,
      image: img8,
      name: "Timeless Collection",
      description: "A timeless look made for every occasion.",
      price: 2999
    }

  ];


  // Variable to store the matching product
  let product;


  // Check every product
  for (let i = 0; i < products.length; i++) {

    if (products[i].id == id) {

      product = products[i];

      break;
    }

  }


  // If product ID is wrong
  if (!product) {
    return <h1>Product Not Found</h1>;
  }


  return (

    <div className="product-page">

      {/* Product image */}
      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      {/* Product information */}
      <div className="product-info">

        <h1>{product.name}</h1>

        <p>
          {product.description}
        </p>

        <h2>
          ₹{product.price}
        </h2>


        {/* Size selection */}
        <h3>Select Size</h3>

        <div className="sizes">

          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>

        </div>


        {/* Go to order page */}
        <Link
          to={`/order/${id}`}
          className="buy-button"
        >
          BUY NOW →
        </Link>


      </div>

    </div>

  );

};

export default Product;


import React from 'react'
import "./Home.css"

import img1 from "./img1.jfif";
import img2 from "./img2.jfif";
import img3 from "./img3.jfif";
import img4 from "./img4.jfif";
import img5 from "./img5.jfif";
import img6 from "./img6.jfif";
import img7 from "./img7.jfif";
import img8 from "./img8.jfif";

import Register from './register.jsx';

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <section className='container'>

        <p className="logo">
          ★ PREMIUM FASHION ★
        </p>

        <a href="Contact.html" className="contact">
          ➤ Contact
        </a>

      </section>


      <div className='contant'>

        <section className='contant_1'>
          Discover fashion that feels effortless, modern, and completely yours. <br />
          Every piece is designed to bring confidence to your everyday style. <br />
          Explore timeless looks made for every moment.
        </section>

        <section className='contant_2'>
          DESIGNED TO MAKE AN ENTRANCE
        </section>

      </div>


      <section className="image-section">

        <img
          className="img2"
          src={img2}
          alt="img2 is missing"
        />

        <img
          className="img1"
          src={img1}
          alt="img1 is missing"
        />

        <img
          className="img3"
          src={img3}
          alt="img3 is missing"
        />

        <img
          className="img4"
          src={img4}
          alt="img4 is missing"
        />

        <img
          className="img5"
          src={img5}
          alt="img5 is missing"
        />

      </section>


      <section className='white-section'>

        <section className="new-images">

          <Link to="/product/1" className="img-box box1">
            <img src={img1} />
            <p>Discover your style.</p>
          </Link>

          <Link to="/product/2" className="img-box box2">
            <img src={img2} />
            <p>Designed for confidence.</p>
          </Link>

          <Link to="/product/3" className="img-box box3">
            <img src={img3} />
            <p>Made for every moment.</p>
          </Link>

          <Link to="/product/4" className="img-box box4">
            <img src={img4} />
            <p>Style that feels unique.</p>
          </Link>

          <Link to="/product/5" className="img-box box5">
            <img src={img5} />
            <p>Timeless fashion.</p>
          </Link>

          <Link to="/product/6" className="img-box box6">
            <img src={img6} />
            <p>Express yourself.</p>
          </Link>

          <Link to="/product/7" className="img-box box7">
            <img src={img7} />
            <p>Every detail matters.</p>
          </Link>

          <Link to="/product/8" className="img-box box8">
            <img src={img8} />
            <p>Discover the collection.</p>
          </Link>

        </section>


        <Register />

      </section>

    </div>
  );
}

export default Home;

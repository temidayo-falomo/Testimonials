import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Welcome to Scale!</h1>
        <p>
          I built this Testimonial project in ReactJs using Json Server, Axios
          to make http requests to a simple Backend, and React RouterV6 for
          Routing.
        </p>
        <Link to="/testimonial">
          <button>Say Something</button>
        </Link>
      </div>
      <div className="hero-right">
        <img src="./assets/astro.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3800/items").then((res) => {
      setUsers(res.data.reverse());
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        What Our Users Say about Us(Say Something 👀)
      </h2>
      <div className="home-testimonials">
        {users.map((user, index) => {
          return (
            <div className="user-testimonial" key={user.id}>
              <span>{index + 1}.</span>
              <div className="avatar">
                <img src={user.picture} alt="User" />
              </div>
              <div className="div">
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <p>{user.testimony}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

import axios from "axios";
import { Image } from "cloudinary-react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Testimonial.css";

function Testimonial() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [testimony, setTestimony] = useState("");
  // const [imageSelected, setImageSelected] = useState("");
  const [picArray, setPicArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const uploadImage = (e) => {
    const types = ["image/png", "image/jpg", "image/jpeg"];

    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      const picData = new FormData();
      picData.append("file", e.target.files[0]);
      picData.append("upload_preset", "dayo1234");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/temidayo-falomo/image/upload",
          picData
        )
        .then((res) => {
          setLoading(true);
          setPicArray(res.data.url);
        });
    }
  };

  const navigate = useNavigate("/");

  const data = {
    firstName: firstName,
    lastName: lastName,
    testimony: testimony,
    picture: picArray,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3800/items", data).then(navigate("/"));
  };

  return (
    <>
    <Navbar />
    <section className="testimonials-page">
      <form className="testimonial-form" onSubmit={handleSubmit}>
        <h1>Share your story!</h1>
        <div className="input">
          <label htmlFor="">Upload Picture:</label>
          <input type="file" onChange={uploadImage} required className="custom-file-input"/>
          {loading ? <h4>Image Updated!</h4> : <h4 className="not-updated">Image not updated !</h4>}
        </div>
        <div className="input">
          <label htmlFor="">First Name:</label>
          <input
            type="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="">Last Name:</label>
          <input
            type="name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="">Your Story:</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            value={testimony}
            onChange={(e) => setTestimony(e.target.value)}
            required
          ></textarea>
        </div>
        {loading ? (
          <button>Share Story</button>
        ) : (
          <button disabled className="disabled">Share Story</button>
        )}
      </form>
    </section>
    </>
  );
}

export default Testimonial;

import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="orderDiv">
        <Link to="/menu">
          <button className="orderButton">SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

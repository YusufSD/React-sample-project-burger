import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutImage"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutContent">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatem dolorum repudiandae placeat, possimus libero soluta
          eligendi animi sequi harum odio dicta expedita. Totam mollitia velit,
          earum dolorem consequuntur explicabo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero voluptatem dolorum repudiandae
          placeat, possimus libero soluta eligendi animi sequi harum odio dicta
          expedita. Totam mollitia velit, earum dolorem consequuntur explicabo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptatem dolorum repudiandae placeat, possimus libero soluta
          eligendi animi sequi harum odio dicta expedita. Totam mollitia velit,
          earum dolorem consequuntur explicabo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero voluptatem dolorum repudiandae
          placeat, possimus libero soluta eligendi animi sequi harum odio dicta
          expedita. Totam mollitia velit, earum dolorem consequuntur explicabo?
        </p>
      </div>
    </div>
  );
};

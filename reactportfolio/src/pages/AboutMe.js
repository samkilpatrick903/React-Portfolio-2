import React from "react";
import Pic from "../components/images/SK1.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div>
      <div className="img-container">
        <img className="img1" src={Pic} alt="img of myself" />
      </div>
      <div className="container">
        <p>
          Hello! I'm Sam Kilpatrick, a full-stack developer and graphic
          designer. Since leaving the piney woods of east Texas, and spending
          some educational years around the state, I now call Austin home. Along
          the way, I've developed a fairly large record collection, decided that
          tea is better than coffee, and narrowed my wardrobe down to about 4
          shirts.
        </p>
      </div>
    </div>
  );
}

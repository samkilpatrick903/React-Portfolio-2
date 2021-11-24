import React from "react";
import Pdf from "../components/SK_Resume_2021.pdf";
import "../styles/Resume.css";
export default function Resume() {
  return (
    <div className="resume-container">
      <div className="front-end">
        <h3>Front-End Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="front-end">
        <h3>Back-End Skills</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequalize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <a href={Pdf} without rel="noopener noreferrer" target="_blank" className="resume-btn">
          <button label="Resume">View Resume</button>
        </a>

    </div>
  );
}

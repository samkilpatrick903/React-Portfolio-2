import React from "react";
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
import '../styles/Footer.css';
import 'animate.css'

function Footer() {

  const myInfo = {
    github: `https://github.com/samkilpatrick903`,
    linkedin:`https://www.linkedin.com/in/samkilpatrick903/`,
  }

  return (
    <div className="footer">
        <a href={myInfo.github}without rel="noopener noreferrer" target="_blank" className="animate__animated animate__bounce"><FaGithubSquare /></a>
        <a href={myInfo.linkedin} without rel="noopener noreferrer" target="_blank" className="animate__animated animate__bounce"><FaLinkedin /></a>
    </div>
  );
}

export default Footer;
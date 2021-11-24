import React, { useState } from "react";
import NavBar from "../pages/NavBar";
import About from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
// import Footer from "./Footer";
// import '../components/styles/Header.css'

function ProfileContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div>
   {/* <header className="main-container">
       <div className="jumbotron-fluid">
          <h1>Sam Kilpatrick</h1>
         </div>
         <div> */}
         <h1>Sam Kilpatrick</h1>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    {/* </div> */}
    {/* </header> */}
    </div>
  );
}

export default ProfileContainer;
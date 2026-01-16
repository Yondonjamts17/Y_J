import React from "react";
import Header from "../assets/components/1.Header/Header.jsx";
import Footer from "../assets/components/7.Footer/Footer.jsx";
import Contact from "../assets/components/6.Contact/Contact.jsx";
import "../assets/components/4.Project/Project.css";

const Project2 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Project2</h1>
        <img
          src="/assets/2.jpg"
          alt="Project2"
          className="project-page-image"
        />
        <p>Placeholder content for Project 2.</p>
        <div className="navigation-buttons">
          <a href="/project1" className="back-link">
            Previous Project
          </a>
          <a href="/project3" className="next-link">
            Next Project
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project2;

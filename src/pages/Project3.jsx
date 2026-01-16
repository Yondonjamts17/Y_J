import React from "react";
import Header from "../assets/components/1.Header/Header.jsx";
import Footer from "../assets/components/7.Footer/Footer.jsx";
import Contact from "../assets/components/6.Contact/Contact.jsx";
import "../assets/components/4.Project/Project.css";

const Project3 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Project3</h1>
        <img
          src="/assets/3.jpg"
          alt="Project3"
          className="project-page-image"
        />
        <p>Placeholder content for Project 3.</p>
        <div className="navigation-buttons">
          <a href="/project2" className="back-link">
            Previous Project
          </a>
          <a href="/" className="next-link">
            Back to Main Page
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project3;

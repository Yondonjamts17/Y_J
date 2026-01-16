import React from "react";
import Header from "../assets/components/1.Header/Header.jsx";
import Footer from "../assets/components/7.Footer/Footer.jsx";
import Contact from "../assets/components/6.Contact/Contact.jsx";
import "../assets/components/4.Project/Project.css";

const Project1 = () => {
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Project1</h1>
        <img
          src="/assets/1.jpg"
          alt="Project1"
          className="project-page-image"
        />
        <p>
          Y.A Construction specializes in precision blacksmithing techniques,
          ensuring reliable technology for grinding, cutting, and assembly. Our
          focus is on planning, designing, and executing projects with
          exceptional quality.
        </p>
        <p>
          Case Study: Metal processing and steel frame construction in Chiba
          Prefecture.
        </p>
        <div className="navigation-buttons">
          <a href="/" className="back-link">
            Back to Main Page
          </a>
          <a href="/project2" className="next-link">
            Next Project
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Project1;

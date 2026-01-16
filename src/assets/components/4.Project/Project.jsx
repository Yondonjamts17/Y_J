import React from "react";
import "./Project.css";

const projectData = [
  {
    id: "project1",
    title: "Professional Machine Maintenance",
    image: "../../assets/1.jpg",
    description: "Reliable technology supporting stable equipment operation",
    details:
      "Industrial equipment maintenance focusing on planning, designing, and execution (Kanto region case study)",
    link: "/project1",
  },
  {
    id: "project2",
    title: "Precision Blacksmithing Techniques",
    image: "../../assets/2.jpg",
    description: "Reliable technology for grinding, cutting, and assembly",
    details:
      "Metal processing and steel frame construction emphasizing planning, designing, and execution (Chiba Prefecture case study)",
    link: "/project2",
  },
  {
    id: "project3",
    title: "Professional Welding Technology",
    image: "../../assets/3.jpg",
    description: "Precision welding ensuring strength and safety",
    details:
      "Welding work for architectural steel frames with a focus on planning, designing, and execution (Tokyo case study)",
    link: "/project3",
  },
];

const Project = () => {
  return (
    <section id="project" className="project">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>

        {projectData.map((project, index) => (
          <div
            key={project.id}
            id={project.id}
            className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

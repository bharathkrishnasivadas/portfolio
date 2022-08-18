/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Payroll Project",
      img: "/2.png",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
    {
      title: "coffee project",
      img: "/3.png",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
    {
      title: "Pizza shop",
      img: "/4.png",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
    {
      title: "Budget planner",
      img: "/5.png",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
    {
      title: "Laptop Service",
      img: "/6.jpg",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
    {
      title: "Nationalize API",
      img: "/7.png",
      gLink: "https://github.com/bharathkrishnasivadas",
      lLink: "https://app.netlify.com/teams/bharathkrishnasivadas/sites",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/bharathkrishnasivadas"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
              Solved challenging dataset problems by using ideas from distributed computing,
              large-scale design, real-time data processing, data storage, machine learning, and artificial intelligence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
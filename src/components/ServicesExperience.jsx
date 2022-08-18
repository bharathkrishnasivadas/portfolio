import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Databases",
      desc: "Managed, optimized, and updated PHP databases as required and Creating and executing tests.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Write clean code, drive technical design, and take responsibility for technical delivery.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Web Development Stacks",
      desc: "Enhanced efficiency, quality data, scope, operability, and flexibility of applications.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1+</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>60+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>1</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>34+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import resume from "./images/resume.jpg"
import databases from "./images/databases.png"
import tesda from "./images/tesda-nc2.png"
import dogcare from "./images/dogcare.png"


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            My Portfolio!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tech-stack">
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certificates">
                  Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* First Section */}
      <div id="home" className="section">
        <h2>I'm Aleah Kim Manatad, a BSIT student</h2>
        <h2>from the University of Mindanao.</h2>
        <div className="social-icons"></div>
      </div>

      {/* Second Section: Resume */}
      <div id="resume" className="section resume-section">
        <h2>Resume</h2>
        <img src={resume} alt="resume" />
        <div className="resume-buttons">
          <a
            href="https://drive.google.com/file/d/1basrPFLKzXElwPc79JPDe74TgBro6c44/view?usp=sharing"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            View Full Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1basrPFLKzXElwPc79JPDe74TgBro6c44"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Third Section: Tech Stack */}
      <div id="tech-stack" className="section tech-stack">
        <h2>My Tech Stack</h2>
        <div>
          <i className="fa-solid fa-database icon"></i>
          <i className="fa-brands fa-figma icon "></i>
          <i className="fa-brands fa-git-alt icon"></i>
        </div>
      </div>

      {/* Fourth Section: Certificates */}
      <div id="certificates" className="section certificates">
        <h2>Certificates</h2>
        <div className="certificate">
          <img src={databases} alt="Certiport IT Specialist - Databases" />
          <div className="caption">
            <div className="title">Certiport IT Specialist - Databases</div>
            <div>
              I am certified as an IT Specialist in Databases by Certiport.
            </div>
          </div>
        </div>
        <div className="certificate">
          <img src={tesda} alt="TESDA CSS" />
          <div className="caption">
            <div className="title">TESDA Computer System Servicing</div>
            <div>
            I have successfully obtained the National Certificate II in Computer System Servicing.
            </div>
          </div>
        </div>
       
      </div>

      {/* Fifth Section: Projects */}
      <div id="projects" className="section projects">
        <h2>Work Samples</h2>
        <div className="project">
          <div className="content">
            <div className="title">DogCareDavao: Information Management System</div>
            <div className="caption">
              An Information Management System for Dog Pound Davao
            </div>
            <div className="icons">
              <i className="fa-brands fa-laravel"></i>
              <i className="fa-brands fa-vuejs"></i>
              <i className="fa-solid fa-database"></i>
              <i className="fa-brands fa-docker"></i>
            </div>
            <a href="https://davaodogcare.com/" className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">
              View Website
            </a>
          </div>
          <img src={dogcare} alt="Dog Care Davao" />
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="section contact-me">
        <h2>Visit My Social</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/a.Murphyyyy/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
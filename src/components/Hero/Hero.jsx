import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import profile from '../../assets/memoji-computer.png'
import githubIcon from '../../assets/github-dark.svg'
import linkedinIcon from '../../assets/linkedin-dark.svg'


const Hero = () => {
  return (
    <div className="mainContainer">
      <section>
        <h1>AMIRUDHEEN <br /> SHAREIF</h1>
        <h3>FRONTEND ENGINEER</h3>
        <div className="icons">
          <a href="https://github.com/amirudheenshareif">
            <img src={githubIcon}alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/amirudheenshareif/">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>
        <div className="summary">
          <p>Focused on developing high performance React web apps that drive business growth.</p>
        </div>
        <div className="resume">
          <a href="https://github.com/user-attachments/files/20137252/Amirudheen_Shareif_CV.pdf" download>
          <motion.button
            whileHover={{
              scale: 1.2, // Increases size on hover
              backgroundColor: "#3498db", // Changes background color
              color: "#fff", // Changes text color
            }}
            whileTap={{
              scale: 0.8, // Decreases size on tap
              backgroundColor: "#2980b9", // Darker shade on tap
            }}
            transition={{ type: "spring", stiffness: 300 }} // Spring effect
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
              cursor: "pointer",
              background: "linear-gradient(90deg, #667EEA, #A67D8D)",
              color: "#fff",
            }}
          >
            Resume
          </motion.button>

          </a>
        </div>
      </section>
      <div className="profile">
        <img src={profile} alt="Profile" />
        <div className="availability">
          <button>.</button>
          <p>Available for new projects</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

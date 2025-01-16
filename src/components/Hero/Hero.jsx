import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';



export const Hero = () => {
    return (
        <>
            <div className="mainContainer">
                <section>
                    <h1>AMIRUDHEEN <br /> SHAREIF</h1>
                    <h3>FRONTEND DEVELOPER</h3>
                    <div className="icons">
                        <a href="https://github.com/amirudheenshareif">
                        <img src={`${process.env.PUBLIC_URL}/assets/github-dark.svg`} alt="GitHub Icon" />
                            </a>
                            <a href="##">
                            <img src={`${process.env.PUBLIC_URL}/assets/linkedin-dark.svg`} alt="LinkedIn Icon" />
                                </a>        
                    </div>
                    <div className="summary">
                        <p>With a passion for developing modern React web apps for commercial businesses.</p>
                    </div>
                    {/* <div className="resume"><button>Resume</button></div> */}
                    <motion.button
        whileHover={{
          scale: 1.2, // Increases size on hover
          backgroundColor: "#3498db", // Changes background color
          color: "#fff", // Changes text color
        }}
        whileTap={{
          scale: 0.9, // Shrinks slightly when clicked
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
    
                </section>
                <div className="profile">
                <img src={`${process.env.PUBLIC_URL}/assets/hero-img.png`} alt="Profile" />
                </div>
            </div>
    
        </>
      )
}
